<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260927210150 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cuisine (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(100) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_10D52C6B5E237E06 (name), UNIQUE INDEX UNIQ_10D52C6B989D9B62 (slug), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE email_verification_token (id INT AUTO_INCREMENT NOT NULL, token VARCHAR(128) NOT NULL, expires_at DATETIME NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, user_id INT NOT NULL, UNIQUE INDEX UNIQ_C4995C675F37A13B (token), INDEX IDX_C4995C67A76ED395 (user_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE password_reset_token (id INT AUTO_INCREMENT NOT NULL, token VARCHAR(128) NOT NULL, expires_at DATETIME NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, used_at DATETIME DEFAULT NULL, user_id INT NOT NULL, UNIQUE INDEX UNIQ_6B7BA4B65F37A13B (token), INDEX IDX_6B7BA4B6A76ED395 (user_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(100) NOT NULL, roles JSON NOT NULL, is_verified TINYINT NOT NULL, status VARCHAR(255) NOT NULL, last_login_at DATETIME DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE email_verification_token ADD CONSTRAINT FK_C4995C67A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE password_reset_token ADD CONSTRAINT FK_6B7BA4B6A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE email_verification_token DROP FOREIGN KEY FK_C4995C67A76ED395');
        $this->addSql('ALTER TABLE password_reset_token DROP FOREIGN KEY FK_6B7BA4B6A76ED395');
        $this->addSql('DROP TABLE cuisine');
        $this->addSql('DROP TABLE email_verification_token');
        $this->addSql('DROP TABLE password_reset_token');
        $this->addSql('DROP TABLE `user`');
    }
}
