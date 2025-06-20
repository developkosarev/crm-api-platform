<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Dto\BulkCompanyDto;
use App\Entity\Company;
use Doctrine\ORM\EntityManagerInterface;

class BulkCompanyProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $entityManager)
    {
    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): BulkCompanyDto
    {
        if (!$data instanceof BulkCompanyDto) {
            return $data;
        }

        $output = new BulkCompanyDto();

        //$createdCompanies = [];

        foreach ($data->items as $company) {
            //$company = new Company();
            //$company->name = $companyData['name'] ?? '';

            $this->entityManager->persist($company);
            $this->entityManager->flush();

            //$createdCompanies[] = [
            //    'id' => (string)$company->getId(),
            //    'name' => $company->name,
            //];
            //
            //$createdCompanies[] = $company;

            $output->addItem($company);
        }

        //$output = new BulkCompanyDto();
        //$output->items = $createdCompanies;

        return $output;
    }
}
