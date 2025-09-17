<?php

namespace App\Entity\Traits;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

trait CustomerTrait
{
    #[Groups(['user:read', 'user:create', 'user:update','customer:read', 'customer:create', 'customer:update'])]
    #[ORM\Column(name: 'first_name', type: Types::STRING, nullable: true)]
    private ?string $firstName = null;

    #[Groups(['user:read', 'user:create', 'user:update','customer:read', 'customer:create', 'customer:update'])]
    #[ORM\Column(name: 'last_name', type: Types::STRING, nullable: true)]
    private ?string $lastName = null;

    public function setFirstName(string $value): self
    {
        $this->firstName = $value;
        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setLastName(string $value): self
    {
        $this->lastName = $value;
        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }
}

