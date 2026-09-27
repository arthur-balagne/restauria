<?php

namespace App\Doctrine;

use App\Entity\Behaviour\TimestampableInterface;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsDoctrineListener;
use Doctrine\ORM\Event\PrePersistEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Doctrine\ORM\Events;
use Psr\Clock\ClockInterface;

#[AsDoctrineListener(event: Events::prePersist)]
#[AsDoctrineListener(event: Events::preUpdate)]
final class TimestampableListener
{
    public function __construct(private readonly ClockInterface $clock)
    {
    }

    public function prePersist(PrePersistEventArgs $args): void
    {
        $entity = $args->getObject();
        if (!$entity instanceof TimestampableInterface) {
            return;
        }

        $entity->markCreated($this->clock->now());
    }

    public function preUpdate(PreUpdateEventArgs $args): void
    {
        $entity = $args->getObject();
        if (!$entity instanceof TimestampableInterface) {
            return;
        }

        $entity->markUpdated($this->clock->now());
    }
}
