<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250914174814 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE customer ADD first_name VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE customer ADD last_name VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user_entity ADD first_name VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user_entity ADD last_name VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE customer DROP first_name');
        $this->addSql('ALTER TABLE customer DROP last_name');
        $this->addSql('ALTER TABLE user_entity DROP first_name');
        $this->addSql('ALTER TABLE user_entity DROP last_name');
    }
}
