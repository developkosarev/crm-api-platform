<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public const string USER_1_REFERENCE = 'user-1';
    public const string USER_2_REFERENCE = 'user-2';
    public const string USER_3_REFERENCE = 'user-3';

    public const string USER_1_ID = '1';
    public const string USER_2_ID = '2';
    public const string USER_3_ID = '3';
    public const string USER_1_TEST = 'admin@example.com';
    public const string USER_2_TEST = 'owner@example.com';
    public const string USER_3_TEST = 'user@example.com';
    private const string USER_PLAIN_PASSWORD = 'Password@2022';

    public function __construct(
        private readonly UserPasswordHasherInterface $hasher
    )
    {}

    public function load(ObjectManager $manager): void
    {
        foreach ($this->getUsers() as [$id, $email, $role, $reference]) {
            $user = new User();
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

    private function getUsers(): array
    {
        return [
            [self::USER_1_ID, self::USER_1_TEST, [User::ROLE_ADMIN], self::USER_1_REFERENCE],
            [self::USER_2_ID, self::USER_2_TEST, [User::ROLE_OWNER], self::USER_2_REFERENCE],
            [self::USER_3_ID, self::USER_3_TEST, [User::ROLE_USER], self::USER_3_REFERENCE],
        ];
    }
}
