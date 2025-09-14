<?php

namespace App\Email\Auth;

use App\Email\EmailInterface;

interface ResetPasswordInterface extends EmailInterface
{
    public const EMAIL_TYPE = 'AUTH_RESET_PASSWORD';

    public function getConfirmCode(): string;
    public function setConfirmCode(string $confirmCode): self;
    public function getConfirmUrl(): string;
}
