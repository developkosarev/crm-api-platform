DOCKER_COMPOSE_DEV = docker compose
DOCKER_COMPOSE_PROXY = docker compose -f compose.proxy.yml

CONTAINER_NAME_CRM = crm-api-platform-php-1
CONTAINER_NAME_MAILER = crm-api-platform-mailer-1
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
	@echo "$(call format,bash-mailer,'Bash mailer dev')"
	@echo "$(call red,===============================)"
	@echo "$(call format,restart-pwa,'Restart pwa dev')"
	@echo "$(call format,bash-pwa,   'Bash pwa dev')"
	@echo "$(call red,===============================)"
	@echo "$(call format,crm-fixture,'Crm fixture load')"
	@echo "$(call format,e2e,'Run e2e test')"
	@echo "$(call format,vitest,'Run vitest test')"
	@echo "$(call yellow,===========GIT=================)"
	@echo "$(call format,git-remote-v,'git remote -v')"
	@echo "$(call format,git-push-origin-belvexa-master,'git push origin-belvexa master')"
	@echo "$(call format,git-pull-origin-belvexa-master,'git pull origin-belvexa master')"

build: ## Build dev
	$(DOCKER_COMPOSE_DEV) build --no-cache
.PHONY: build

start: ## Start dev
#	$(DOCKER_COMPOSE_PROXY) up -d
	$(DOCKER_COMPOSE_DEV) up --wait
.PHONY: start

start-xdebug: ## Start dev http://localhost:82/_profiler/xdebug
	XDEBUG_MODE=debug XDEBUG_SESSION=1 $(DOCKER_COMPOSE_DEV) up --wait
.PHONY: start-xdebug

stop: ## Stop dev
	$(DOCKER_COMPOSE_DEV) stop
#	$(DOCKER_COMPOSE_PROXY) stop
.PHONY: stop

down: ## Down dev
	$(DOCKER_COMPOSE_DEV) down
.PHONY: down

bash: ## Bash dev
	docker exec -it $(CONTAINER_NAME_CRM) bash
.PHONY: bash


## MAILER
bash-mailer: ## Bash dev mailer
	docker exec -it $(CONTAINER_NAME_MAILER) bash
.PHONY: bash-mailer



## PWA
restart-pwa:
	$(DOCKER_COMPOSE_DEV) restart pwa
.PHONY: restart-pwa

bash-pwa:
	docker exec -it $(CONTAINER_NAME_PWA) bash
.PHONY: bash-pwa

typescheck-pwa:
	docker exec -it $(CONTAINER_NAME_PWA) pnpm typescheck
.PHONY: typescheck-pwa


## Tests
crm-fixture:
	docker exec -it $(CONTAINER_NAME_CRM) php bin/console doctrine:fixtures:load
.PHONY: crm-fixture

e2e:
	cd e2e && npm run test
.PHONY: e2e

vitest:
	docker exec -it $(CONTAINER_NAME_PWA) pnpm run test
.PHONY: vitest
