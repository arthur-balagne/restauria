<?php

namespace App\Tests\Controller;

use PHPUnit\Framework\Attributes\DataProvider;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class EmailVerificationControllerTest extends WebTestCase
{
    /** @return iterable<string, array{string, string, string}> */
    public static function verificationPages(): iterable
    {
        yield 'customer' => ['/verify-email', 'Vérification', '/login'];
        yield 'restaurant' => ['/verify-email/restaurant', 'Vérifier votre email · restaurateur', '/login/restaurant'];
    }

    #[DataProvider('verificationPages')]
    public function testVerificationPageIsAccessible(string $url, string $heading, string $loginUrl): void
    {
        $client = static::createClient();
        $client->request('GET', $url);

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains($heading);
        self::assertSelectorTextSame('h1', $heading);
        self::assertSelectorTextContains('.auth-info p', 'email de vérification');
        self::assertSelectorExists(sprintf('.auth-info a.button[href="%s"]', $loginUrl));
        self::assertSelectorNotExists('form.auth-form');
    }
}
