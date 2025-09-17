<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class CustomerFixtures extends Fixture
{
    public const string CUSTOMER_1_REFERENCE = 'customer-1';
    public const string CUSTOMER_1_ID = '1';
    public const string CUSTOMER_1_TEST = 'customer@example.com';
    private const string USER_PLAIN_PASSWORD = 'Customer@2022';

    public function __construct(
        private readonly UserPasswordHasherInterface $hasher
    )
    {}

    public function load(ObjectManager $manager): void
    {
        foreach ($this->getCustomers() as [$id, $email, $role, $reference]) {
            $user = new Customer();
            $user->setEmail($email);
            $user->setFirstName('firstName');
            $user->setLastName('lastName');

            $password = $this->hasher->hashPassword($user, self::USER_PLAIN_PASSWORD);
            $user->setPassword($password);
            $user->setRoles($role);

            $manager->persist($user);

            $this->addReference($reference, $user);
        }
        $manager->flush();
    }

    private function getCustomers(): array
    {
        return [
            [self::CUSTOMER_1_ID, self::CUSTOMER_1_TEST, [Customer::ROLE_CUSTOMER], self::CUSTOMER_1_REFERENCE]
        ];
    }
}
