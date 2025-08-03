<?php
declare(strict_types=1);

namespace App\State;

use App\ApiResource\UserResetPassword;
use App\Dto\UserResetPasswordDto;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;
use SymfonyCasts\Bundle\ResetPassword\ResetPasswordHelperInterface;

/**
 * @implements ProcessorInterface<UserResetPasswordDto, User>
 */
final class UserResetPasswordProcessor implements ProcessorInterface
{
    public function __construct(
        private readonly ResetPasswordHelperInterface $resetPasswordHelper,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private EntityManagerInterface $entityManager
    )
    {
    }

    /**
     * @param UserResetPasswordDto $data
     *
     * @throws NotFoundHttpException
     */
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): ?UserResetPassword
    {
        if (!$data instanceof UserResetPasswordDto) {
            throw new NotFoundHttpException('Data not found.');
        }

        $token = $data->token;

        try {
            /** @var User $user */
            $user = $this->resetPasswordHelper->validateTokenAndFetchUser($token);
        } catch (ResetPasswordExceptionInterface $e) {
            throw new BadRequestHttpException('User not found.');
        }

        $this->resetPasswordHelper->removeResetRequest($token);
        $hashedPassword = $this->passwordHasher->hashPassword($user, $data->plainPassword);

        $user->setPassword($hashedPassword);
        //$user->eraseCredentials();

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $output = new UserResetPassword();

        return $output;
    }
}
