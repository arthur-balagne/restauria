<?php

namespace App\Tests\Controller;

use App\Entity\PasswordResetToken;
use App\Entity\User;
use App\Repository\PasswordResetTokenRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\Attributes\DataProvider;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class PasswordRecoveryControllerTest extends WebTestCase
{
    /** @return iterable<string, array{string, string, string}> */
    public static function forgotPasswordPages(): iterable
    {
        yield 'customer' => ['/forgot-password', 'Mot de passe oublié', '/login'];
        yield 'restaurant' => ['/forgot-password/restaurant', 'Mot de passe oublié · restaurateur', '/login/restaurant'];
    }

    #[DataProvider('forgotPasswordPages')]
    public function testForgotPasswordPageIsAccessible(string $url, string $heading, string $loginUrl): void
    {
        $client = static::createClient();
        $client->request('GET', $url);

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains($heading);
        self::assertSelectorTextSame('h1', $heading);
        self::assertSelectorExists('form.auth-form input[type="email"][name="email"]');
        self::assertSelectorExists('form.auth-form input[type="hidden"][name="_csrf_token"]');
        self::assertSelectorTextSame('form.auth-form button[type="submit"]', 'Demander un lien');
        self::assertSelectorExists(sprintf('.auth-footer a[href="%s"]', $loginUrl));
    }

    public function testForgotPasswordSendsEmailForKnownUser(): void
    {
        $client = static::createClient();
        $client->request('POST', '/forgot-password', [
            'email' => 'client.1@restauria.fr',
            '_csrf_token' => $this->csrfToken($client, '/forgot-password', 'forgot-password'),
        ]);

        self::assertResponseRedirects('/forgot-password/check-email');
        self::assertEmailCount(1);
        $email = self::getMailerMessage();
        $client->followRedirect();
        self::assertSelectorTextContains('h1', 'Vérifiez votre boîte email');
        self::assertNotNull($email);
        self::assertInstanceOf(TemplatedEmail::class, $email);
        self::assertEmailAddressContains($email, 'to', 'client.1@restauria.fr');
        self::assertEmailHtmlBodyContains($email, '/reset-password/');
    }

    public function testForgotPasswordDoesNotLeakUnknownEmail(): void
    {
        $client = static::createClient();
        $client->request('POST', '/forgot-password', [
            'email' => 'ghost@restauria.fr',
            '_csrf_token' => $this->csrfToken($client, '/forgot-password', 'forgot-password'),
        ]);

        self::assertResponseRedirects('/forgot-password/check-email');
        self::assertEmailCount(0);
        $client->followRedirect();
        self::assertSelectorTextContains('h1', 'Vérifiez votre boîte email');
    }

    /** @return iterable<string, array{string, string}> */
    public static function checkEmailPages(): iterable
    {
        yield 'customer' => ['/forgot-password/check-email', '/forgot-password'];
        yield 'restaurant' => ['/forgot-password/restaurant/check-email', '/forgot-password/restaurant'];
    }

    #[DataProvider('checkEmailPages')]
    public function testCheckEmailPageIsAccessible(string $url, string $retryUrl): void
    {
        $client = static::createClient();
        $client->request('GET', $url);

        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('h1', 'Vérifiez votre boîte email');
        self::assertSelectorExists(sprintf('a[href="%s"]', $retryUrl));
    }

    /** @return iterable<string, array{string}> */
    public static function resetDonePages(): iterable
    {
        yield 'customer' => ['/reset-password/done'];
        yield 'restaurant' => ['/reset-password/restaurant/done'];
    }

    #[DataProvider('resetDonePages')]
    public function testResetDonePageIsAccessible(string $url): void
    {
        $client = static::createClient();
        $client->request('GET', $url);

        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('h1', 'Mot de passe mis à jour');
    }

    public function testResetPasswordRejectsTooShortPassword(): void
    {
        $client = static::createClient();
        $container = static::getContainer();
        /** @var UserRepository $users */
        $users = $container->get(UserRepository::class);
        /** @var EntityManagerInterface $em */
        $em = $container->get(EntityManagerInterface::class);

        $user = $users->findOneBy(['email' => 'client.3@restauria.fr']);
        self::assertNotNull($user);

        $tokenValue = bin2hex(random_bytes(16));
        $token = new PasswordResetToken(
            $user,
            $tokenValue,
            (new \DateTimeImmutable())->add(new \DateInterval('PT1H')),
        );
        $em->persist($token);
        $em->flush();

        $url = '/reset-password/'.$tokenValue;
        $client->request('POST', $url, [
            'password' => 'short',
            '_csrf_token' => $this->csrfToken($client, $url, 'reset-password'),
        ]);

        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('form.auth-form', '8 caractères');
        self::assertSelectorExists('form.auth-form input[type="password"]');
    }

    public function testResetPageShowsNoticeForMissingOrInvalidToken(): void
    {
        $client = static::createClient();
        $client->request('GET', '/reset-password');
        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('.auth-info', 'invalide');

        $client->request('GET', '/reset-password/does-not-exist');
        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('.auth-info', 'invalide');
    }

    public function testResetPasswordWithValidTokenUpdatesPassword(): void
    {
        $client = static::createClient();
        $container = static::getContainer();
        /** @var UserRepository $users */
        $users = $container->get(UserRepository::class);
        /** @var EntityManagerInterface $em */
        $em = $container->get(EntityManagerInterface::class);

        $user = $users->findOneBy(['email' => 'client.2@restauria.fr']);
        self::assertNotNull($user);

        $tokenValue = bin2hex(random_bytes(16));
        $token = new PasswordResetToken(
            $user,
            $tokenValue,
            (new \DateTimeImmutable())->add(new \DateInterval('PT1H')),
        );
        $em->persist($token);
        $em->flush();

        $url = '/reset-password/'.$tokenValue;
        $client->request('POST', $url, [
            'password' => 'new-password-42',
            '_csrf_token' => $this->csrfToken($client, $url, 'reset-password'),
        ]);

        self::assertResponseRedirects('/reset-password/done');
        $client->followRedirect();
        self::assertSelectorTextContains('h1', 'Mot de passe mis à jour');

        $em->clear();
        /** @var User $refreshed */
        $refreshed = $users->findOneBy(['email' => 'client.2@restauria.fr']);
        /** @var UserPasswordHasherInterface $hasher */
        $hasher = $container->get('security.user_password_hasher');
        self::assertTrue($hasher->isPasswordValid($refreshed, 'new-password-42'));

        /** @var PasswordResetTokenRepository $tokens */
        $tokens = $container->get(PasswordResetTokenRepository::class);
        $reloaded = $tokens->findOneBy(['token' => $tokenValue]);
        self::assertNotNull($reloaded);
        self::assertTrue($reloaded->isUsed());
    }

    private function csrfToken(KernelBrowser $client, string $path, string $tokenId): string
    {
        $crawler = $client->request('GET', $path);
        $node = $crawler->filter('input[name="_csrf_token"]');
        if ($node->count() > 0) {
            return (string) $node->attr('value');
        }

        /** @var \Symfony\Component\Security\Csrf\CsrfTokenManagerInterface $manager */
        $manager = static::getContainer()->get('security.csrf.token_manager');

        return $manager->getToken($tokenId)->getValue();
    }
}
