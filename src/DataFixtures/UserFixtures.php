<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Enum\UserStatus;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class UserFixtures extends Fixture
{
    private const PASSWORD = 'password';

    public function __construct(
        private readonly UserPasswordHasherInterface $passwordHasher,
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        $this->createUsers($manager, 'client', 10, User::ROLE_CUSTOMER);
        $this->createUsers($manager, 'restaurant', 5, User::ROLE_RESTAURANT);
        $this->createUsers($manager, 'admin', 10, User::ROLE_PLATFORM_ADMIN);

        $manager->flush();
    }

    private function createUsers(ObjectManager $manager, string $prefix, int $count, string $role): void
    {
        $firstName = ucfirst($prefix);

        for ($i = 1; $i <= $count; ++$i) {
            $user = new User(
                sprintf('%s.%d@restauria.fr', $prefix, $i),
                $firstName,
                (string) $i,
            );
            $user->setRoles([$role]);
            $user->setPassword($this->passwordHasher->hashPassword($user, self::PASSWORD));
            $user->setIsVerified(true);
            $user->setStatus(UserStatus::Active);

            $manager->persist($user);
        }
    }
}
