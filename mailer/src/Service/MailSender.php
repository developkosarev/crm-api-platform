<?php

namespace App\Service;

use App\Exception\MailSenderException;
use Psr\Log\LoggerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Contracts\Translation\TranslatorInterface;

class MailSender
{
    private string $systemEmail;

    public function __construct(
        private readonly MailerInterface $mailer,
        private readonly TranslatorInterface $translator,
        private readonly LoggerInterface $logger,
    )
    {
        $this->systemEmail = 'info@example.com';
    }

    public function getSystemEmail(): string
    {
        return $this->systemEmail;
    }

    public function resetPassword(string $resetPasswordUrl): void
    {
        $locale = $this->translator->getLocale();
        $userEmail = 'user@example.com';

        $subject = $this->translator->trans('reset_password.subject', [], 'email', $locale);

        $email = (new Email())
            ->from($this->getSystemEmail())
            ->to($userEmail)
            ->text('Reset password')
            ->html("<p>Reset password: {$resetPasswordUrl} </p>");

        //$email = $this->getMailObject()
        //    ->from($this->getSystemEmail())
        //    ->to($userEmail)
        //    ->subject($subject)
        //    ->htmlTemplate('emails/reset_password.html.twig')
        //    ->context([
        //        'resetPasswordUrl' => $resetPasswordUrl
        //   ]);

        $this->send($email, $locale);
    }

    private function getMailObject(): TemplatedEmail
    {
        return new TemplatedEmail();
    }

    private function send(Email $email): void
    {
        //$oldLocale = $this->translator->getLocale();
        //$this->translator->setLocale($locale);

        try {
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            $exception = new MailSenderException(sprintf(
                "Sending mail problem. To: %s. Message: %s",
                print_r($email->getTo(), true),
                $e->getMessage()
            ));
            $this->logger->error($exception->getMessage());
            throw $exception;
        } finally {
            //$this->translator->setLocale($oldLocale);
        }
    }
}