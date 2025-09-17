<?php
declare(strict_types=1);

namespace App\Command;

use App\Service\MailSender;
//use Crm\Contracts\Message\User\UserResetPasswordRequest;
use App\Message\User\UserResetPasswordRequest;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Messenger\MessageBusInterface;

#[AsCommand(
    name: "email:send",
    description: "Send email via mailer",
    hidden: false
)]
class SendEmailCommand extends Command
{
    public function __construct(
        private readonly MailSender $mailSender,
        private readonly MessageBusInterface $messageBus,
        ?string $name = null
    ) {
        parent::__construct($name);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $token = "Token";

        //$this->mailSender->resetPassword($token);

        $this->messageBus->dispatch(
            message: new UserResetPasswordRequest($token)
        );

        return Command::SUCCESS;
    }
}
