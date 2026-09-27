<?php

namespace App\Entity\Behaviour;

interface TimestampableInterface
{
    public function getCreatedAt(): \DateTimeImmutable;

    public function getUpdatedAt(): \DateTimeImmutable;

    public function markCreated(\DateTimeImmutable $at): void;

    public function markUpdated(\DateTimeImmutable $at): void;
}
