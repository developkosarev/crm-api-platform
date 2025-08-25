DOCKER_COMPOSE_SHOPWARE = docker compose

CONTAINER_NAME_SHOPWARE = crm-shopware-web-1

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
	@echo "$(call yellow,Use the following commands:)"
	@echo "$(call red,===============================)"
	@echo "$(call format,start,'Start containers')"
	@echo "$(call format,down,'Down containers')"
	@echo "$(call format,stop,'Stop containers')"
	@echo "$(call format,bash,'Bash dev')"

start: ## Start crm containers
	$(DOCKER_COMPOSE_SHOPWARE) up -d
.PHONY: start

down: ## Down crm containers
	$(DOCKER_COMPOSE_SHOPWARE) down
.PHONY: down

stop: ## Stop crm containers
	$(DOCKER_COMPOSE_SHOPWARE) stop
.PHONY: stop

bash: ## Bash dev
	docker exec -it $(CONTAINER_NAME_SHOPWARE) sh
.PHONY: bash
