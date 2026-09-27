<?php

namespace App\Controller;

use App\Auth\Audience;
use App\Entity\Cuisine;
use App\Entity\User;
use App\Enum\UserStatus;
use App\Repository\CuisineRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Security\Http\Authenticator\AuthenticatorInterface;

final class RegistrationController extends AbstractController
{
    public function __construct(
        private readonly UserRepository $users,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly EntityManagerInterface $em,
        private readonly CsrfTokenManagerInterface $csrfTokenManager,
        private readonly UserAuthenticatorInterface $userAuthenticator,
        #[Autowire(service: 'security.authenticator.form_login.main')]
        private readonly AuthenticatorInterface $formLoginAuthenticator,
    ) {
    }

    #[Route('/register', name: 'app_register', methods: ['GET', 'POST'])]
    public function customer(Request $request): Response
    {
        return $this->handle($request, Audience::Customer, 'registration/customer.html.twig', [User::ROLE_CUSTOMER]);
    }

    #[Route('/register/restaurant', name: 'app_register_restaurant', methods: ['GET', 'POST'])]
    public function restaurant(Request $request, CuisineRepository $cuisineRepository): Response
    {
        return $this->handle(
            $request,
            Audience::Restaurant,
            'registration/restaurant.html.twig',
            [User::ROLE_RESTAURANT],
            [
                'cuisines' => $cuisineRepository->findAllOrderedByName(),
                'max_cuisines' => Cuisine::MAX_PER_RESTAURANT,
            ],
        );
    }

    /**
     * @param list<string>         $roles
     * @param array<string, mixed> $extra
     */
    private function handle(Request $request, Audience $audience, string $template, array $roles, array $extra = []): Response
    {
        $data = [
            'name' => trim((string) $request->request->get('name', '')),
            'email' => trim((string) $request->request->get('email', '')),
            'password' => (string) $request->request->get('password', ''),
        ];
        $error = null;

        if ($request->isMethod('POST')) {
            $token = new CsrfToken('register', (string) $request->request->get('_csrf_token'));
            if (!$this->csrfTokenManager->isTokenValid($token)) {
                $error = 'Jeton de sécurité invalide, veuillez réessayer.';
            } elseif ('' === $data['name'] || '' === $data['email'] || '' === $data['password']) {
                $error = 'Tous les champs sont obligatoires.';
            } elseif (!filter_var($data['email'], \FILTER_VALIDATE_EMAIL)) {
                $error = 'Adresse email invalide.';
            } elseif (strlen($data['password']) < 8) {
                $error = 'Le mot de passe doit contenir au moins 8 caractères.';
            } elseif (null !== $this->users->findOneBy(['email' => $data['email']])) {
                $error = 'Un compte existe déjà avec cet email.';
            } else {
                [$firstName, $lastName] = $this->splitName($data['name']);
                $user = new User($data['email'], $firstName, $lastName);
                $user->setRoles($roles);
                $user->setPassword($this->passwordHasher->hashPassword($user, $data['password']));
                $user->setStatus(UserStatus::Active);

                $this->em->persist($user);
                $this->em->flush();

                return $this->userAuthenticator->authenticateUser($user, $this->formLoginAuthenticator, $request)
                    ?? $this->redirectToRoute('app_home');
            }
        }

        return $this->render($template, array_merge($extra, [
            'audience' => $audience,
            'error' => $error,
            'form_data' => $data,
        ]));
    }

    /**
     * @return array{0: string, 1: string}
     */
    private function splitName(string $name): array
    {
        $parts = preg_split('/\s+/', $name, 2) ?: [$name];
        $first = $parts[0];
        $last = $parts[1] ?? '-';

        return [$first, '' !== $last ? $last : '-'];
    }
}
