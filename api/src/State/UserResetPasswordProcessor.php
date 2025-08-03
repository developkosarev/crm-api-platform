<?php
declare(strict_types=1);

namespace App\State;

use App\ApiResource\UserResetPassword;
use App\Dto\UserResetPasswordDto;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\TooManyRequestsHttpException;
use SymfonyCasts\Bundle\ResetPassword\Exception\TooManyPasswordRequestsException;
use SymfonyCasts\Bundle\ResetPassword\ResetPasswordHelperInterface;

/**
 * @implements ProcessorInterface<UserResetPasswordDto, User>
 */
final class UserResetPasswordProcessor implements ProcessorInterface
{
    public function __construct(
        private readonly ResetPasswordHelperInterface $resetPasswordHelper,
        private readonly UserRepository $userRepository
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

        if (!$data->email) {
            throw new NotFoundHttpException('Email is required');
        }

        $user = $this->userRepository->findOneBy(['email' => $data->email]);
        if (!$user instanceof User) {
            throw new NotFoundHttpException('User not found.');
        }

        try {
            $resetToken = $this->resetPasswordHelper->generateResetToken($user);
        } catch (TooManyPasswordRequestsException $e) {
            throw new TooManyRequestsHttpException('Too many requests.');

            //$output = new UserResetPassword();
            //$output->token = '1';
            //return $output;
        }
        //} catch (ResetPasswordExceptionInterface $e) {
        //    throw new NotFoundHttpException($e->getMessage());
        //} catch (\Throwable $e) {
        //    throw new NotFoundHttpException($e->getMessage());
        //}

        $output = new UserResetPassword();
        $output->token = $resetToken->getToken();

        return $output;
    }
}
