<?php

namespace App\Repository;

use App\Entity\Cuisine;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Cuisine>
 */
class CuisineRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cuisine::class);
    }

    /** @return list<Cuisine> */
    public function findAllOrderedByName(): array
    {
        return $this->findBy([], ['name' => 'ASC']);
    }
}
