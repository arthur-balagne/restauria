DOCKER_COMPOSE ?= docker compose
EXEC_PHP       = $(DOCKER_COMPOSE) exec php
EXEC_DB        = $(DOCKER_COMPOSE) exec database

# Support passing arguments to make sf and make composer (e.g. `make sf cache:clear` or `make composer require symfony/lock`)
ARGS = $(filter-out $@,$(MAKECMDGOALS))

.PHONY: up down restart logs bash composer sf db migration fixtures test cs cs-fix phpstan lint qa cache-clear help

.DEFAULT_GOAL := help

help:
	@echo "Available commands:"
	@echo "  make up          Start all Docker containers"
	@echo "  make down        Stop all Docker containers"
	@echo "  make restart     Restart all Docker containers"
	@echo "  make logs        Follow Docker containers logs"
	@echo "  make bash        Access PHP container via Bash"
	@echo "  make composer    Run Composer inside PHP container (e.g. make composer install)"
	@echo "  make sf          Run Symfony console inside PHP container (e.g. make sf cache:clear)"
	@echo "  make db          Access MariaDB database inside database container"
	@echo "  make migration   Run Doctrine migrations"
	@echo "  make fixtures    Load Doctrine fixtures"
	@echo "  make test        Run tests using PHPUnit"
	@echo "  make cs          Check coding style using PHP-CS-Fixer"
	@echo "  make cs-fix      Fix coding style using PHP-CS-Fixer"
	@echo "  make phpstan     Run PHPStan static analysis"
	@echo "  make lint        Lint Twig templates, YAML config and the container"
	@echo "  make qa          Run all quality checks (cs, phpstan, lint, test)"
	@echo "  make cache-clear Clear Symfony cache"

up:
	$(DOCKER_COMPOSE) up -d

down:
	$(DOCKER_COMPOSE) down

restart:
	$(DOCKER_COMPOSE) restart

logs:
	$(DOCKER_COMPOSE) logs -f

bash:
	$(EXEC_PHP) bash

composer:
	$(EXEC_PHP) composer $(ARGS)

sf:
	$(EXEC_PHP) bin/console $(ARGS)

db:
	$(EXEC_DB) mariadb -u app -p!ChangeMe! restauria

migration:
	$(EXEC_PHP) bin/console doctrine:migrations:migrate --no-interaction

fixtures:
	$(EXEC_PHP) bin/console doctrine:fixtures:load --no-interaction

test:
	$(EXEC_PHP) bin/phpunit

cs:
	$(EXEC_PHP) vendor/bin/php-cs-fixer fix --dry-run --diff

cs-fix:
	$(EXEC_PHP) vendor/bin/php-cs-fixer fix

phpstan:
	$(EXEC_PHP) vendor/bin/phpstan analyse --memory-limit=512M

lint:
	$(EXEC_PHP) bin/console lint:twig templates/
	$(EXEC_PHP) bin/console lint:yaml config/
	$(EXEC_PHP) bin/console lint:container

qa: cs phpstan lint test

cache-clear:
	$(EXEC_PHP) bin/console cache:clear

%:
	@:
