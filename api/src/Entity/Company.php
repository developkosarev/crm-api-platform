<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\OpenApi\Model;
use App\Dto\BulkCompanyDto;
use App\State\BulkCompanyProcessor;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\DBAL\Types\Types;
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
            openapi: new Model\Operation(
                summary: 'Bulk create companies',
                description: 'Creates multiple companies in a single request',

                //requestBody: new Model\RequestBody(
                //    content: new \ArrayObject([
                //        'application/json' => [
                //            'schema' => [
                //                'type' => 'object',
                //                'properties' => [
                //                    'items' => [
                //                        'type' => 'array',
                //                        'items' => [
                //                            'type' => 'object',
                //                            'properties' => [
                //                                'name' => ['type' => 'string']
                //                            ],
                //                            'required' => ['name']
                //                        ]
                //                    ]
                //                ],
                //                'required' => ['items']
                //            ],
                //            'example' => [
                //                'items' => [
                //                    ['name' => 'Company A'],
                //                    ['name' => 'Company B'],
                //                ]
                //            ]
                //        ]
                //    ])
                //)
            ),
            input: BulkCompanyDto::class,
            output: BulkCompanyDto::class,
            processor: BulkCompanyProcessor::class
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
    #[Assert\NotNull]
    public string $name = '';

    #[ORM\Column(type: Types::STRING, length: 10, unique: true)]
    #[Assert\NotBlank]
    #[Assert\NotNull]
    #[Assert\Length(min: 2, max: 10)]
    public string $code = '';

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
