<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class RegistrationControllerTest extends WebTestCase
{
    public function testCustomerRegistrationPageIsAccessible(): void
    {
        $client = static::createClient();
        $client->request('GET', '/register');

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains('Créer un compte');
        self::assertSelectorTextSame('h1', 'Créer un compte');
        self::assertSelectorExists('form.auth-form input[name="name"]');
        self::assertSelectorExists('form.auth-form input[name="email"]');
        self::assertSelectorExists('form.auth-form input[name="password"]');
        self::assertSelectorExists('form.auth-form input[type="hidden"][name="_csrf_token"]');
        self::assertSelectorExists('.auth-footer a[href="/login"]');
        self::assertSelectorExists('.auth-footer a[href="/register/restaurant"]');
    }

    public function testCustomerCanRegisterAndIsAuthenticated(): void
    {
        $client = static::createClient();
        $client->followRedirects(false);
        $email = sprintf('new.customer+%d@restauria.fr', random_int(1, 999999));
        $client->request('POST', '/register', [
            'name' => 'Jane Doe',
            'email' => $email,
            'password' => 'password',
            '_csrf_token' => $this->csrfToken($client, '/register'),
        ]);

        self::assertResponseRedirects('/');
        $client->followRedirect();
        self::assertResponseIsSuccessful();
    }

    public function testCustomerRegistrationRejectsDuplicateEmail(): void
    {
        $client = static::createClient();
        $client->request('POST', '/register', [
            'name' => 'Client Un',
            'email' => 'client.1@restauria.fr',
            'password' => 'password',
            '_csrf_token' => $this->csrfToken($client, '/register'),
        ]);

        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('.form-alert--error', 'existe déjà');
    }

    private function csrfToken(KernelBrowser $client, string $path): string
    {
        $crawler = $client->request('GET', $path);

        return (string) $crawler->filter('input[name="_csrf_token"]')->attr('value');
    }

    public function testRestaurantRegistrationPageIsAccessible(): void
    {
        $client = static::createClient();
        $client->request('GET', '/register/restaurant');

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains('Créer un compte restaurateur');
        self::assertSelectorTextSame('h1', 'Créer un compte restaurateur');
        self::assertSelectorTextSame('.auth-header__eyebrow', 'Espace restaurateur');
        self::assertSelectorExists('form.auth-form input[name="name"][autocomplete="organization"]');
        self::assertSelectorExists('form.auth-form input[name="email"]');
        self::assertSelectorExists('form.auth-form input[name="password"]');
        self::assertSelectorExists('form.auth-form input[name="address"][maxlength="240"]');
        self::assertSelectorExists('.auth-footer a[href="/login/restaurant"]');
        self::assertSelectorExists('.auth-footer a[href="/register"]');
    }

    public function testRestaurantRegistrationOffersCuisineSelectionLimitedToFive(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/register/restaurant');

        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('fieldset.auth-cuisine-select legend', '1 à 5 choix');
        self::assertSelectorExists('form[data-controller="registration-draft"]');

        $checkboxes = $crawler->filter('input[type="checkbox"][name="cuisineIds"]');
        self::assertCount(6, $checkboxes);
        self::assertContains('francaise', $checkboxes->extract(['value']));
        self::assertContains('cafe-patisserie', $checkboxes->extract(['value']));
    }
}
