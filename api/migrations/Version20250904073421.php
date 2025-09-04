<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250904073421 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE calendar_event (id UUID NOT NULL, title VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, start_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, end_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, user_id UUID DEFAULT NULL, PRIMARY KEY (id))');
        $this->addSql('CREATE INDEX IDX_57FA09C9A76ED395 ON calendar_event (user_id)');
        $this->addSql('CREATE INDEX idx_user_start_and ON calendar_event (user_id, start_at, end_at)');
        $this->addSql('ALTER TABLE calendar_event ADD CONSTRAINT FK_57FA09C9A76ED395 FOREIGN KEY (user_id) REFERENCES user_entity (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE calendar_event DROP CONSTRAINT FK_57FA09C9A76ED395');
        $this->addSql('DROP TABLE calendar_event');
    }
}
