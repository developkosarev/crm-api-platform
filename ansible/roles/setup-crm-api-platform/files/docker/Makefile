DOCKER_COMPOSE_CRM = docker compose -p crm$(crm) -f compose-base.yml -f compose-crm-$(crm).override.yml
DOCKER_COMPOSE_DB = docker compose -f compose-db.yml
DOCKER_COMPOSE_RABBITMQ = docker compose -f docker-compose-rabbitmq.yml


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
	@echo "$(call yellow,Use the following commands (available crm=1 ... crm=2):)"
	@echo "$(call red,===============================)"
	@echo "$(call format,start crm=1,'Start crm1 containers')"
	@echo "$(call format,down crm=1,'Down crm1 containers')"
	@echo "$(call format,stop crm=1,'Stop crm1 containers')"
	@echo "$(call format,restart crm=1,'Restart crm1 containers')"
	@echo "$(call red,===============================)"
	@echo "$(call format,start-db,'Start db')"
	@echo "$(call format,stop-db,'Stop db')"
	@echo "$(call red,===============================)"
	@echo "$(call format,start-rabbitmq,'Start rabbitmq')"
	@echo "$(call format,stop-rabbitmq,'Stop rabbitmq')"

start: ## Start crm containers
	$(DOCKER_COMPOSE_CRM) up -d
.PHONY: start

down: ## Down crm containers
	$(DOCKER_COMPOSE_CRM) down
.PHONY: down

stop: ## Stop crm containers
	$(DOCKER_COMPOSE_CRM) stop
.PHONY: stop

restart: ## Restart crm containers
	$(DOCKER_COMPOSE_CRM) restart
.PHONY: restart






start-db: ## Start db
	$(DOCKER_COMPOSE_DB) up --build -d
.PHONY: start-db

stop-db: ## Stop db
	$(DOCKER_COMPOSE_DB) stop
.PHONY: stop-db

down-db: ## Down db
	$(DOCKER_COMPOSE_DB) down
.PHONY: down-db




start-rabbitmq: ## Start rabbitmq
	$(DOCKER_COMPOSE_RABBITMQ) up --build -d
.PHONY: start-rabbitmq

stop-rabbitmq: ## Stop rabbitmq
	$(DOCKER_COMPOSE_RABBITMQ) stop
.PHONY: stop-rabbitmq


