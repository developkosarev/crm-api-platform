<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use App\Repository\CustomerRepository;
use App\State\UserPasswordHasher;
use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Uid\Uuid;

#[ApiResource(
    uriTemplate: '/api/customers{._format}',
    shortName: 'Customer',
    operations: [
        //new GetCollection(security: "is_granted('ROLE_ADMIN')"),
        //new Get(uriTemplate: '/api/users/{id}', security: "is_granted('ROLE_ADMIN')"),
        new Post(validationContext: ['groups' => ['Default', 'user:create']], processor: UserPasswordHasher::class),
    ],
    normalizationContext: ['groups' => ['customer:read']],
    denormalizationContext: ['groups' => ['customer:create', 'customer:update']],
    //security: "is_granted('ROLE_ADMIN')"
)]
#[ORM\Entity(repositoryClass: CustomerRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_CUSTOMER_EMAIL', fields: ['email'])]
#[ORM\Table(name: 'customer')]
#[UniqueEntity('email')]
class Customer implements UserInterface, PasswordAuthenticatedUserInterface
{
    final public const string ROLE_CUSTOMER = 'ROLE_CUSTOMER';

    #[Groups(['customer:read'])]
    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $id;

    #[Assert\NotBlank]
    #[Assert\Email]
    #[Groups(['customer:read', 'customer:create', 'customer:update'])]
    #[ORM\Column(type: Types::STRING, length: 180, unique: true)]
    private ?string $email = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column]
    private array $roles = [self::ROLE_CUSTOMER];

    /**
     * @var ?string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[Assert\NotBlank(groups: ['customer:create'])]
    #[Groups(['customer:create', 'customer:update'])]
    private ?string $plainPassword = null;

    #[Groups(['customer:create', 'customer:update'])]
    #[ORM\Column(name: 'created_at', type: 'datetime', nullable: true)]
    protected ?DateTime $createdAt;

    #[Groups(['customer:create', 'customer:update'])]
    #[ORM\Column(name: 'updated_at', type: 'datetime', nullable: true)]
    protected ?DateTime $updatedAt;

    #region Construct

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }

    #endregion

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     *
     * @return list<string>
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = self::ROLE_CUSTOMER;

        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(?string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }
}
