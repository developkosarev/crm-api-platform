<?php

namespace App\Email;

interface EmailInterface
{
    public function getEmailType(): string;

    public function getEmail(): string;

    public function setEmail(string $email): self;

    public function getLanguage(): string;

    public function setLanguage(string $language): self;

    public function getBaseUrl(): string;

    public function setBaseUrl(string $baseUrl): self;

}
