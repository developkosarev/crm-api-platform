<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250917191719 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE calendar_event ADD customer_id UUID DEFAULT NULL');
        $this->addSql('ALTER TABLE calendar_event ADD CONSTRAINT FK_57FA09C99395C3F3 FOREIGN KEY (customer_id) REFERENCES customer (id)');
        $this->addSql('CREATE INDEX IDX_57FA09C99395C3F3 ON calendar_event (customer_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE calendar_event DROP CONSTRAINT FK_57FA09C99395C3F3');
        $this->addSql('DROP INDEX IDX_57FA09C99395C3F3');
        $this->addSql('ALTER TABLE calendar_event DROP customer_id');
    }
}
