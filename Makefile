DOCKER_COMPOSE_DEV = docker compose

CONTAINER_NAME_CRM = crm-api-platform-php-1
CONTAINER_NAME_PWA = crm-api-platform-pwa-1

args = `arg="$(filter-out $(firstword $(MAKECMDGOALS)),$(MAKECMDGOALS))" && echo $${arg:-${1}}`

green  = $(shell printf "\e[32;01m$1\e[0m")
yellow = $(shell printf "\e[33;01m$1\e[0m")
red    = $(shell printf "\e[33;31m$1\e[0m")

format = $(shell printf "%-40s %s" "$(call green,make $1)" $2)

comma:= ,

.DEFAULT_GOAL:=help

%:
	@:

help:
	@echo ""
	@echo "$(call yellow,Use the following commands)"
	@echo "$(call red,===============================)"
	@echo "$(call format,build,'Build dev')"
	@echo "$(call format,start,'Start dev')"
	@echo "$(call format,start-xdebug,'Start dev xdebug')"
	@echo "$(call format,stop,'Stop dev')"
	@echo "$(call format,down,'Down dev')"
	@echo "$(call format,bash,'Bash dev')"
	@echo "$(call red,===============================)"
	@echo "$(call format,restart-pwa,'Restart pwa dev')"
	@echo "$(call format,bash-pwa,   'Bash pwa dev')"
	@echo "$(call red,===============================)"
	@echo "$(call format,crm-fixture,'Crm fixture load')"

build: ## Start dev
	$(DOCKER_COMPOSE_DEV) build --no-cache
.PHONY: build

start: ## Start dev
	$(DOCKER_COMPOSE_DEV) up --wait
.PHONY: start

start-xdebug: ## Start dev
	XDEBUG_MODE=debug XDEBUG_SESSION=1 $(DOCKER_COMPOSE_DEV) up --wait
.PHONY: start-xdebug

stop: ## Stop dev
	$(DOCKER_COMPOSE_DEV) stop
.PHONY: stop

down: ## Down dev
	$(DOCKER_COMPOSE_DEV) down
.PHONY: down

bash: ## Bash dev
	docker exec -it $(CONTAINER_NAME_CRM) bash
.PHONY: bash


## PWA
restart-pwa:
	$(DOCKER_COMPOSE_DEV) restart pwa
.PHONY:

bash-pwa:
	docker exec -it $(CONTAINER_NAME_PWA) bash
.PHONY:


## Tests
crm-fixture:
	docker exec -it $(CONTAINER_NAME_CRM) php bin/console doctrine:fixtures:load
.PHONY:
