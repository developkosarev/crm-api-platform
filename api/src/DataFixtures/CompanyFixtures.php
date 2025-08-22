<?php

namespace App\DataFixtures;

use App\Entity\Company;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CompanyFixtures extends Fixture
{
    public const string COMPANY_1_REFERENCE = 'company-1';

    public function load(ObjectManager $manager): void
    {
        $company = new Company();
        $company->code = '0000000001';
        $company->name = 'Company 1';
        $manager->persist($company);
        $manager->flush();
    }
}
