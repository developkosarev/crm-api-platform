<?php

namespace App\Message\User;

class UserResetPasswordRequest
{
    public function __construct(
        protected string $email,
        protected string $token
    ){}

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getToken(): string
    {
        return $this->token;
    }
}
