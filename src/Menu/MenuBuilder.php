<?php

namespace App\Menu;

use Knp\Menu\FactoryInterface;
use Knp\Menu\ItemInterface;
use Symfony\Bundle\SecurityBundle\Security;

class MenuBuilder
{
    public function __construct(
        private readonly FactoryInterface $factory,
        private readonly Security $security,
    ) {
    }

    public function createCustomerMenu(): ItemInterface
    {
        $menu = $this->factory->createItem('root');

        $this->addNavLink($menu, 'Restaurants', '#');
        $this->addNavLink($menu, 'Découvrir', '#');
        $this->addNavLink($menu, 'Contact', '#');
        $this->addAudienceLink($menu, 'Je suis restaurateur', 'app_login_restaurant');

        return $menu;
    }

    public function createRestaurantMenu(): ItemInterface
    {
        $menu = $this->factory->createItem('root');

        $this->addNavLink($menu, 'Découvrir', '#');
        $this->addNavLink($menu, 'Tarifs pro', '#');
        $this->addNavLink($menu, 'Contact', '#');
        $this->addAudienceLink($menu, 'Je suis client', 'app_home');

        return $menu;
    }

    public function createCustomerActions(): ItemInterface
    {
        $menu = $this->factory->createItem('root');

        if (null !== $this->security->getUser()) {
            $this->addActionLink($menu, 'Déconnexion', 'app_logout', 'button button--quiet button--small');
        } else {
            $this->addActionLink($menu, 'Connexion', 'app_login', 'button button--quiet button--small');
            $this->addActionLink($menu, 'Compte client', 'app_register', 'button button--primary button--small');
        }

        return $menu;
    }

    public function createRestaurantActions(): ItemInterface
    {
        $menu = $this->factory->createItem('root');

        if (null !== $this->security->getUser()) {
            $this->addActionLink($menu, 'Déconnexion', 'app_logout', 'button button--quiet button--small');
        } else {
            $this->addActionLink($menu, 'Connexion', 'app_login_restaurant', 'button button--quiet button--small');
            $this->addActionLink($menu, 'Espace pro', 'app_register_restaurant', 'button button--primary button--small');
        }

        return $menu;
    }

    private function addNavLink(ItemInterface $menu, string $label, string $target): void
    {
        $item = 'app_home' === $target || str_starts_with($target, 'app_')
            ? $menu->addChild($label, ['route' => $target])
            : $menu->addChild($label, ['uri' => $target]);
        $item->setLinkAttribute('class', 'marketing-nav__link');
    }

    private function addAudienceLink(ItemInterface $menu, string $label, string $route): void
    {
        $menu->addChild($label, ['route' => $route])
            ->setLinkAttribute('class', 'marketing-nav__link marketing-nav__audience');
    }

    private function addActionLink(ItemInterface $menu, string $label, string $route, string $class): void
    {
        $menu->addChild($label, ['route' => $route])
            ->setLinkAttribute('class', $class);
    }
}
