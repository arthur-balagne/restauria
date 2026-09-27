<?php

namespace App\Entity\Behaviour;

use Doctrine\ORM\Mapping as ORM;

trait TimestampableTrait
{
    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column]
    private \DateTimeImmutable $updatedAt;

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): \DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function markCreated(\DateTimeImmutable $at): void
    {
        $this->createdAt = $at;
        $this->updatedAt = $at;
    }

    public function markUpdated(\DateTimeImmutable $at): void
    {
        $this->updatedAt = $at;
    }
}
