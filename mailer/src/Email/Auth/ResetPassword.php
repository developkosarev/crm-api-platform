<?php

namespace App\Email\Auth;

use App\Email\AbstractEmail;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;

class ResetPassword extends AbstractEmail implements ResetPasswordInterface
{
    private const ROUTE_CONFIRM_URL = 'reset-password/confirm';

    private string $confirmCode;

    public function getEmailType(): string
    {
        return self::EMAIL_TYPE;
    }

    #[Groups(['body','params'])]
    #[SerializedName('confirm_code')]
    public function getConfirmCode(): string
    {
        return $this->confirmCode;
    }

    public function setConfirmCode(string $confirmCode): self
    {
        $this->confirmCode = $confirmCode;
        return $this;
    }

    #[Groups(['body','params'])]
    #[SerializedName('confirm_url')]
    public function getConfirmUrl(): string
    {
        return $this->getBaseUrl() . self::ROUTE_CONFIRM_URL . '/?code=' . $this->getConfirmCode();
    }
}
