<?php

namespace App\Dto;

use ApiPlatform\Metadata\ApiProperty;
use Symfony\Component\Validator\Constraints as Assert;
use App\Entity\Company;

class BulkCompanyDto
{

    /**
     * Return the Companies.
     *
     * @return ?Company[]
     */
    #[ApiProperty(
        description: 'List of companies to create.',
        //openapiContext: [
        //    'type' => 'array',
        //    'example' => [
        //        ['name' => 'Company A'],
        //        ['name' => 'Company B'],
        //   ],
        //]
    )]
    //#[Assert\Valid]
    //#[Assert\Count(min: 1)]
    #[Assert\All([
        new Assert\Type(type: Company::class)
    ])]
    public array $items = [];

    public function getItems(): ?array
    {
        return $this->items;
    }

    public function addItem(Company $item): void
    {
        $this->items[] = $item;
    }

}
