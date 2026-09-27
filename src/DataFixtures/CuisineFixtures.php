<?php

namespace App\DataFixtures;

use App\Entity\Cuisine;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

final class CuisineFixtures extends Fixture
{
    private const CUISINES = [
        'francaise' => 'française',
        'italienne' => 'italienne',
        'fusion' => 'fusion',
        'gastronomique' => 'gastronomique',
        'cafe-patisserie' => 'café & pâtisserie',
        'asiatique' => 'asiatique',
    ];

    public function load(ObjectManager $manager): void
    {
        foreach (self::CUISINES as $slug => $name) {
            $manager->persist(new Cuisine($name, $slug));
        }

        $manager->flush();
    }
}
