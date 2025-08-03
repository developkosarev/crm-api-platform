<?php
declare(strict_types=1);

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

final class UserResetPasswordDto
{
    #[Assert\NotBlank]
    public string $token;

    #[Assert\NotBlank]
    public string $plainPassword;
}
