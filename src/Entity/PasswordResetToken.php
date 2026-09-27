<?php

namespace App\Entity;

use App\Repository\PasswordResetTokenRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PasswordResetTokenRepository::class)]
class PasswordResetToken extends AbstractUserToken
{
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $usedAt = null;

    public function getUsedAt(): ?\DateTimeImmutable
    {
        return $this->usedAt;
    }

    public function markUsed(\DateTimeImmutable $usedAt): static
    {
        $this->usedAt = $usedAt;

        return $this;
    }

    public function isUsed(): bool
    {
        return null !== $this->usedAt;
    }
}
