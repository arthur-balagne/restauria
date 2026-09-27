<?php

namespace App\Tests\Menu;

use App\Menu\MenuBuilder;
use Knp\Menu\ItemInterface;
use Knp\Menu\MenuFactory;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Bundle\SecurityBundle\Security;

class MenuTest extends WebTestCase
{
    public function testCustomerMenuRendersOnHomePage(): void
    {
        $client = static::createClient();
        $client->request('GET', '/');

        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('.marketing-nav', 'Restaurants');
        self::assertSelectorTextContains('.marketing-nav', 'Découvrir');
        self::assertSelectorTextContains('.marketing-nav', 'Contact');
        self::assertSelectorTextContains('.marketing-nav', 'Je suis restaurateur');
        self::assertSelectorTextContains('.marketing-actions', 'Connexion');
        self::assertSelectorTextContains('.marketing-actions', 'Compte client');
    }

    public function testCustomerMenuBuilderContainsExpectedItems(): void
    {
        $builder = $this->builder();
        self::assertMenuHas($builder->createCustomerMenu(), 'Restaurants');
        self::assertMenuHas($builder->createCustomerMenu(), 'Je suis restaurateur');
        self::assertMenuHas($builder->createCustomerActions(), 'Connexion');
        self::assertMenuHas($builder->createCustomerActions(), 'Compte client');
    }

    public function testRestaurantMenuBuilderContainsExpectedItems(): void
    {
        $builder = $this->builder();
        self::assertMenuHas($builder->createRestaurantMenu(), 'Tarifs pro');
        self::assertMenuHas($builder->createRestaurantMenu(), 'Je suis client');
        self::assertMenuHas($builder->createRestaurantActions(), 'Connexion');
        self::assertMenuHas($builder->createRestaurantActions(), 'Espace pro');
    }

    private function builder(): MenuBuilder
    {
        $security = $this->createMock(Security::class);
        $security->method('getUser')->willReturn(null);

        return new MenuBuilder(new MenuFactory(), $security);
    }

    private static function assertMenuHas(ItemInterface $menu, string $label): void
    {
        self::assertNotNull($menu->getChild($label), sprintf('Menu should contain item "%s"', $label));
    }
}
