<?php

namespace App\Auth;

enum Audience: string
{
    case Customer = 'customer';
    case Restaurant = 'restaurant';

    public function isRestaurant(): bool
    {
        return self::Restaurant === $this;
    }

    public function opposite(): self
    {
        return $this->isRestaurant() ? self::Customer : self::Restaurant;
    }

    public function routeName(string $base): string
    {
        return $this->isRestaurant() ? $base.'_restaurant' : $base;
    }

    public function spaceLabel(): string
    {
        return $this->isRestaurant() ? 'Espace restaurateur' : 'Espace client';
    }

    public function emailLabel(): string
    {
        return $this->isRestaurant() ? 'Email professionnel' : 'Email';
    }

    public function quote(): string
    {
        return $this->isRestaurant()
            ? 'Un service plus fluide, de la salle à la cuisine.'
            : 'Retrouvez vos bonnes adresses, vos commandes et toutes vos envies gourmandes.';
    }

    public function quoteAuthor(): string
    {
        return $this->isRestaurant() ? 'L’espace des restaurateurs' : 'Votre espace client Restauria';
    }

    public function switchLabel(): string
    {
        return $this->isRestaurant()
            ? 'Vous êtes client ? Créer un compte client'
            : 'Vous êtes restaurateur ? Créer un compte professionnel';
    }
}
