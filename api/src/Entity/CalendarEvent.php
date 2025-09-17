<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use DateTimeImmutable;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Uid\Uuid;


#[ApiResource(
    operations: [
        new GetCollection(uriTemplate: '/calendar-events'),
        new Get(uriTemplate: '/calendar-events/{id}'),
    ],
    security: "is_granted('ROLE_ADMIN')"
)]
#[ORM\Entity]
#[ORM\Table(name: 'calendar_event')]
#[ORM\Index(name: 'idx_user_start_and', fields: ['user', 'startAt', 'endAt'])]
class CalendarEvent
{
    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $id;

    #[ORM\Column(length: 255)]
    private string $title;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[Groups(['appointment:create', 'appointment:update'])]
    #[ORM\ManyToOne(targetEntity: Customer::class, inversedBy: 'customers')]
    private Customer $customer;

    #[Groups(['appointment:create', 'appointment:update'])]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'users')]
    private User $user;

    #[Groups(['appointment:create', 'appointment:update'])]
    #[ORM\Column(name: 'start_at', type: Types::DATETIME_IMMUTABLE)]
    private \DateTimeImmutable $startAt;

    #[Groups(['appointment:create', 'appointment:update'])]
    #[ORM\Column(name: 'end_at', type: Types::DATETIME_IMMUTABLE)]
    private \DateTimeImmutable $endAt;

    #[Groups(['appointment:create', 'appointment:update'])]
    #[ORM\Column(name: 'created_at', type: Types::DATETIME_IMMUTABLE)]
    private ?DateTimeImmutable $createdAt;

    #[Groups(['appointment:create', 'appointment:update'])]
    #[ORM\Column(name: 'updated_at', type: Types::DATETIME_IMMUTABLE)]
    private ?DateTimeImmutable $updatedAt;

    public function __construct()
    {
      $this->createdAt = new \DateTimeImmutable();
      $this->updatedAt = new \DateTimeImmutable();
    }

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function setId(Uuid $id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }
    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function getStartAt(): \DateTimeImmutable
    {
        return $this->startAt;
    }

    public function setStartAt(\DateTimeImmutable $startAt): self
    {
        $this->startAt = $startAt;
        return $this;
    }

    public function getEndAt(): \DateTimeImmutable
    {
        return $this->endAt;
    }

    public function setEndAt(\DateTimeImmutable $endAt): self
    {
        $this->endAt = $endAt;
        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(Customer $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    public function getUser(): ?User
    {
      return $this->user;
    }

    public function setUser(User $user): self
    {
      $this->user = $user;

      return $this;
    }

}
