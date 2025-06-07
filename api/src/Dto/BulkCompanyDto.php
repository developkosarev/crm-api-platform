<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class BulkCompanyDto
{
    #[Assert\Valid]
    #[Assert\Count(min: 1)]
    public array $items = [];
}
