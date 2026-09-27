<?php

namespace App\Tests\Controller;

use PHPUnit\Framework\Attributes\DataProvider;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class SecurityControllerTest extends WebTestCase
{
    /** @return iterable<string, array{string, string, string, string}> */
    public static function loginPages(): iterable
    {
        yield 'customer' => ['/login', 'Connexion', 'Espace client', '/forgot-password'];
        yield 'restaurant' => ['/login/restaurant', 'Connexion restaurateur', 'Espace restaurateur', '/forgot-password/restaurant'];
    }

    #[DataProvider('loginPages')]
    public function testLoginPageIsAccessible(string $url, string $heading, string $eyebrow, string $forgotPasswordUrl): void
    {
        $client = static::createClient();
        $client->request('GET', $url);

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains($heading);
        self::assertSelectorTextSame('h1', $heading);
        self::assertSelectorTextSame('.auth-header__eyebrow', $eyebrow);
        self::assertSelectorExists('form.auth-form[method="post"] input[type="email"][name="email"]');
        self::assertSelectorExists('form.auth-form input[type="password"][name="password"]');
        self::assertSelectorExists('form.auth-form input[type="hidden"][name="_csrf_token"]');
        self::assertSelectorExists(sprintf('.auth-footer a[href="%s"]', $forgotPasswordUrl));
    }

    public function testCustomerCanLoginWithValidCredentials(): void
    {
        $client = static::createClient();
        $client->followRedirects(false);
        $crawler = $client->request('GET', '/login');
        $token = (string) $crawler->filter('input[name="_csrf_token"]')->attr('value');

        $client->request('POST', '/login', [
            'email' => 'client.1@restauria.fr',
            'password' => 'password',
            '_csrf_token' => $token,
        ]);

        self::assertResponseRedirects('/');
        $client->followRedirect();
        self::assertResponseIsSuccessful();
    }

    public function testInvalidLoginShowsError(): void
    {
        $client = static::createClient();
        $client->followRedirects(true);
        $crawler = $client->request('GET', '/login');
        $token = (string) $crawler->filter('input[name="_csrf_token"]')->attr('value');

        $client->request('POST', '/login', [
            'email' => 'client.1@restauria.fr',
            'password' => 'wrong-password',
            '_csrf_token' => $token,
        ]);

        self::assertResponseIsSuccessful();
        self::assertSelectorExists('.form-alert--error');
        self::assertSelectorTextContains('.form-alert--error', 'incorrect');
    }
}
