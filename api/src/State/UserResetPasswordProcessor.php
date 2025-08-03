<?php
declare(strict_types=1);

namespace App\State;

use App\Dto\UserResetPasswordDto;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * @implements ProcessorInterface<UserResetPasswordDto, User>
 */
final class UserResetPasswordProcessor implements ProcessorInterface
{
    /**
     * @param UserResetPasswordDto $data
     *
     * @throws NotFoundHttpException
     */
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): UserResetPasswordDto
    {
        //if ('user@example.com' === $data->email) {
        //    return new UserResetPasswordDto(email: $data->email, id: 1);
        //}

        //throw new NotFoundHttpException();

        return $data;
    }
}
