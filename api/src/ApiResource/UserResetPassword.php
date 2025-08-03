<?php
declare(strict_types=1);

namespace App\ApiResource;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use App\Dto\UserResetPasswordDto;
use App\State\UserResetPasswordProcessor;

#[ApiResource(
    uriTemplate: '/api/users/reset-password{._format}',
    shortName: 'User',
    operations: [
        new Post(input: UserResetPasswordDto::class, processor: UserResetPasswordProcessor::class),
    ],
)]
class UserResetPassword
{
}
