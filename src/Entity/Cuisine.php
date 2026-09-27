<?php

namespace App\Entity;

use App\Entity\Behaviour\TimestampableInterface;
use App\Entity\Behaviour\TimestampableTrait;
use App\Repository\CuisineRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CuisineRepository::class)]
#[UniqueEntity(fields: ['name'])]
#[UniqueEntity(fields: ['slug'])]
class Cuisine implements TimestampableInterface
{
    use TimestampableTrait;

    public const MAX_PER_RESTAURANT = 5;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function __construct(
        #[ORM\Column(length: 100, unique: true)]
        #[Assert\NotBlank]
        private string $name,
        #[ORM\Column(length: 100, unique: true)]
        #[Assert\NotBlank]
        private string $slug,
    ) {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }
}
