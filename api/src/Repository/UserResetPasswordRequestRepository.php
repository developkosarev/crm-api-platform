<?php

namespace App\Repository;

use App\Entity\UserResetPasswordRequest;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use SymfonyCasts\Bundle\ResetPassword\Model\ResetPasswordRequestInterface;
use SymfonyCasts\Bundle\ResetPassword\Persistence\Repository\ResetPasswordRequestRepositoryTrait;
use SymfonyCasts\Bundle\ResetPassword\Persistence\ResetPasswordRequestRepositoryInterface;

/**
 * @extends ServiceEntityRepository<UserResetPasswordRequest>
 */
class UserResetPasswordRequestRepository extends ServiceEntityRepository implements ResetPasswordRequestRepositoryInterface
{
    use ResetPasswordRequestRepositoryTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserResetPasswordRequest::class);
    }

    /**
     * @param User $user
     */
    public function createResetPasswordRequest(object $user, \DateTimeInterface $expiresAt, string $selector, string $hashedToken): ResetPasswordRequestInterface
    {
        return new UserResetPasswordRequest($user, $expiresAt, $selector, $hashedToken);
    }

    public function getMostRecentNonExpiredRequestDate(object $user): ?\DateTimeInterface
    {
        // Normally there is only 1 max request per use, but written to be flexible
        /** @var ResetPasswordRequestInterface $resetPasswordRequest */
        $resetPasswordRequest = $this->createQueryBuilder('t')
            ->where('t.user = :user')
            //->setParameter('user', $user)
            ->setParameter('user', $user->getId(), 'uuid')
            ->orderBy('t.requestedAt', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult()
        ;

        if (null !== $resetPasswordRequest && !$resetPasswordRequest->isExpired()) {
            return $resetPasswordRequest->getRequestedAt();
        }

        return null;
    }

    public function removeResetPasswordRequest(ResetPasswordRequestInterface $resetPasswordRequest): void
    {
        $this->createQueryBuilder('t')
            ->delete()
            ->where('t.user = :user')
            //->setParameter('user', $resetPasswordRequest->getUser())
            ->setParameter('user', $resetPasswordRequest->getUser()->getId(), 'uuid')
            ->getQuery()
            ->execute()
        ;
    }
}
