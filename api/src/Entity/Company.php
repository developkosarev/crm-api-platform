<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Dto\BulkCompanyDto;
use App\State\BulkCompanyProcessor;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Types\UlidType;
use Symfony\Component\Uid\Ulid;


#[ApiResource(
    operations: [
        new GetCollection(uriTemplate: '/company'),
        new Get(uriTemplate: '/company/{id}'),
        new Post(uriTemplate: '/company'),
        new Post(
            uriTemplate: '/company/bulk',
            input: BulkCompanyDto::class,
            output: BulkCompanyDto::class,
            processor: BulkCompanyProcessor::class,
        )
    ],
    security: "is_granted('ROLE_ADMIN')"
)]
#[ORM\Entity]
class Company
{
    #[ORM\Id]
    #[ORM\Column(type: UlidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.ulid_generator')]
    private ?Ulid $id;

    #[ORM\Column]
    #[Assert\NotBlank]
    public string $name = '';

    public function getId(): ?Ulid
    {
        return $this->id;
    }

    public function setId(Ulid $id): self
    {
        $this->id = $id;
        return $this;
    }
}
