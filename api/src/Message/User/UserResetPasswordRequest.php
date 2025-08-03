<?php

namespace App\Message\User;

class UserResetPasswordRequest
{
    public function __construct(protected string $token){}

    public function getToken(): string
    {
        return $this->token;
    }
}
