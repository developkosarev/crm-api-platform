<?php

namespace App\Handler\User;

use App\Message\User\UserResetPasswordRequest;
use App\Service\MailSender;
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

        //$msg = "Begin verification of the therapist customerActivationId #{$customerActivationId}";
        //$this->logger->warning($msg);

        //$customer = $this->verificationCustomerService->verifyBySalesforceCustomerActivationId($customerActivationId);

        $msg = "Send email UserResetPasswordRequest #{$token}";
        $this->logger->warning($msg);
    }
}
