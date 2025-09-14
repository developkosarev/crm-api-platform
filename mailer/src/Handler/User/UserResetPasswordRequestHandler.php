<?php

namespace App\Handler\User;

use App\Service\MailSender;
use Crm\Contracts\Message\User\UserResetPasswordRequest;
use Psr\Log\LoggerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
class UserResetPasswordRequestHandler
{
    public function __construct(
        private readonly MailSender $mailSender,
        private readonly LoggerInterface $logger,
    ) {}

    public function __invoke(UserResetPasswordRequest $userResetPasswordRequest): void
    {
        $token = $userResetPasswordRequest->getToken();

        $this->mailSender->resetPassword($token);

        $msg = "Send email UserResetPasswordRequest #{$token}";
        $this->logger->warning($msg);
    }
}
