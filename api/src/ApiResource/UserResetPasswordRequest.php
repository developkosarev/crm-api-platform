<?php
declare(strict_types=1);

namespace App\ApiResource;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use App\Dto\UserResetPasswordRequestDto;
use App\State\UserResetPasswordRequestProcessor;

#[ApiResource(
    uriTemplate: '/api/users/reset-password-request{._format}',
    shortName: 'User',
    operations: [
        new Post(input: UserResetPasswordRequestDto::class, processor: UserResetPasswordRequestProcessor::class),
    ],
)]
class UserResetPasswordRequest
{
    public string $token;
}
