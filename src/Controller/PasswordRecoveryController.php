<?php

namespace App\Controller;

use App\Auth\Audience;
use App\Entity\PasswordResetToken;
use App\Repository\PasswordResetTokenRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

final class PasswordRecoveryController extends AbstractController
{
    private const TOKEN_TTL = 'PT1H';
    private const FROM_ADDRESS = 'no-reply@restauria.fr';
    private const FROM_NAME = 'Restauria';

    public function __construct(
        private readonly UserRepository $users,
        private readonly PasswordResetTokenRepository $tokens,
        private readonly EntityManagerInterface $em,
        private readonly MailerInterface $mailer,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly CsrfTokenManagerInterface $csrfTokenManager,
    ) {
    }

    #[Route('/forgot-password', name: 'app_forgot_password', defaults: ['audience' => Audience::Customer->value], methods: ['GET', 'POST'])]
    #[Route('/forgot-password/restaurant', name: 'app_forgot_password_restaurant', defaults: ['audience' => Audience::Restaurant->value], methods: ['GET', 'POST'])]
    public function forgot(Request $request, Audience $audience): Response
    {
        $error = null;
        $email = trim((string) $request->request->get('email', ''));

        if ($request->isMethod('POST')) {
            $token = new CsrfToken('forgot-password', (string) $request->request->get('_csrf_token'));
            if (!$this->csrfTokenManager->isTokenValid($token)) {
                $error = 'Jeton de sécurité invalide, veuillez réessayer.';
            } elseif ('' === $email || !filter_var($email, \FILTER_VALIDATE_EMAIL)) {
                $error = 'Adresse email invalide.';
            } else {
                $user = $this->users->findOneBy(['email' => $email]);
                if (null !== $user) {
                    $this->tokens->invalidateAllForUser($user);
                    $now = new \DateTimeImmutable();
                    $resetToken = new PasswordResetToken(
                        $user,
                        bin2hex(random_bytes(32)),
                        $now->add(new \DateInterval(self::TOKEN_TTL)),
                    );
                    $this->em->persist($resetToken);
                    $this->em->flush();

                    $resetUrl = $this->generateUrl(
                        $audience->routeName('app_reset_password_token'),
                        ['token' => $resetToken->getToken()],
                        UrlGeneratorInterface::ABSOLUTE_URL,
                    );

                    $this->mailer->send((new TemplatedEmail())
                        ->from(new Address(self::FROM_ADDRESS, self::FROM_NAME))
                        ->to($user->getEmail())
                        ->subject('Réinitialisation de votre mot de passe Restauria')
                        ->htmlTemplate('password_recovery/email.html.twig')
                        ->context([
                            'user' => $user,
                            'reset_url' => $resetUrl,
                            'expires_at' => $resetToken->getExpiresAt(),
                        ]),
                    );
                }

                return $this->redirectToRoute($audience->routeName('app_forgot_password_check_email'));
            }
        }

        return $this->render('password_recovery/forgot.html.twig', [
            'audience' => $audience,
            'error' => $error,
            'email' => $email,
        ]);
    }

    #[Route('/forgot-password/check-email', name: 'app_forgot_password_check_email', defaults: ['audience' => Audience::Customer->value], methods: ['GET'])]
    #[Route('/forgot-password/restaurant/check-email', name: 'app_forgot_password_check_email_restaurant', defaults: ['audience' => Audience::Restaurant->value], methods: ['GET'])]
    public function checkEmail(Audience $audience): Response
    {
        return $this->render('password_recovery/check_email.html.twig', [
            'audience' => $audience,
        ]);
    }

    #[Route('/reset-password', name: 'app_reset_password', defaults: ['audience' => Audience::Customer->value], methods: ['GET'])]
    #[Route('/reset-password/restaurant', name: 'app_reset_password_restaurant', defaults: ['audience' => Audience::Restaurant->value], methods: ['GET'], priority: 1)]
    #[Route('/reset-password/{token}', name: 'app_reset_password_token', defaults: ['audience' => Audience::Customer->value], methods: ['GET', 'POST'])]
    #[Route('/reset-password/{token}/restaurant', name: 'app_reset_password_token_restaurant', defaults: ['audience' => Audience::Restaurant->value], methods: ['GET', 'POST'])]
    public function reset(Request $request, Audience $audience, ?string $token = null): Response
    {
        $resetToken = null !== $token ? $this->tokens->findValidByToken($token, new \DateTimeImmutable()) : null;
        $error = null;

        if (null !== $resetToken && $request->isMethod('POST')) {
            $csrf = new CsrfToken('reset-password', (string) $request->request->get('_csrf_token'));
            $password = (string) $request->request->get('password', '');
            if (!$this->csrfTokenManager->isTokenValid($csrf)) {
                $error = 'Jeton de sécurité invalide, veuillez réessayer.';
            } elseif (strlen($password) < 8) {
                $error = 'Le mot de passe doit contenir au moins 8 caractères.';
            } else {
                $user = $resetToken->getUser();
                $user->setPassword($this->passwordHasher->hashPassword($user, $password));
                $resetToken->markUsed(new \DateTimeImmutable());
                $this->em->flush();

                return $this->redirectToRoute($audience->routeName('app_reset_password_done'));
            }
        }

        return $this->render('password_recovery/reset.html.twig', [
            'audience' => $audience,
            'token' => $token,
            'valid_token' => null !== $resetToken,
            'error' => $error,
        ]);
    }

    #[Route('/reset-password/done', name: 'app_reset_password_done', defaults: ['audience' => Audience::Customer->value], methods: ['GET'], priority: 2)]
    #[Route('/reset-password/restaurant/done', name: 'app_reset_password_done_restaurant', defaults: ['audience' => Audience::Restaurant->value], methods: ['GET'], priority: 2)]
    public function resetDone(Audience $audience): Response
    {
        return $this->render('password_recovery/reset_done.html.twig', [
            'audience' => $audience,
        ]);
    }
}
