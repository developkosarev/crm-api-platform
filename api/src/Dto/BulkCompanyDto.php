<?php

namespace App\Dto;

use ApiPlatform\Metadata\ApiProperty;
use Symfony\Component\Validator\Constraints as Assert;
use App\Entity\Company;

class BulkCompanyDto
{

    #[ApiProperty(
        description: 'List of companies to create.',
        openapiContext: [
            'type' => 'array',
            'example' => [
                ['name' => 'Company A'],
                ['name' => 'Company B'],
            ],
        ]
    )]
    #[Assert\Valid]
    #[Assert\Count(min: 1)]
    public array $items = [];
}
