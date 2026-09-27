<?php

namespace App\Tests\Doctrine;

use App\Entity\Cuisine;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

final class TimestampableListenerTest extends KernelTestCase
{
    private EntityManagerInterface $entityManager;

    protected function setUp(): void
    {
        self::bootKernel();
        $this->entityManager = self::getContainer()->get(EntityManagerInterface::class);
        $this->entityManager->beginTransaction();
    }

    protected function tearDown(): void
    {
        $this->entityManager->rollback();
        parent::tearDown();
    }

    public function testTimestampsAreSetOnPersistAndRefreshedOnUpdate(): void
    {
        $cuisine = new Cuisine('Test cuisine', 'test-cuisine');

        $this->entityManager->persist($cuisine);
        $this->entityManager->flush();

        $createdAt = $cuisine->getCreatedAt();
        self::assertEquals($createdAt, $cuisine->getUpdatedAt());

        usleep(1_100_000);
        $cuisine->setName('Renamed cuisine');
        $this->entityManager->flush();

        self::assertEquals($createdAt, $cuisine->getCreatedAt());
        self::assertGreaterThan($createdAt, $cuisine->getUpdatedAt());
    }
}
