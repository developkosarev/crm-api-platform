DOCKER_COMPOSE_DEV = docker compose

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
	@echo "$(call format,stop,'Stop dev')"
	@echo "$(call format,down,'Down dev')"
	@echo "$(call format,bash,'Bash dev')"

build: ## Start dev
	$(DOCKER_COMPOSE_DEV) build --no-cache
.PHONY: build

start: ## Start dev
	$(DOCKER_COMPOSE_DEV) up --wait
.PHONY: start

stop: ## Stop dev
	$(DOCKER_COMPOSE_DEV) stop
.PHONY: stop

down: ## Down dev
	$(DOCKER_COMPOSE_DEV) down
.PHONY: down

bash: ## Bash dev
	docker exec -it magento-api-platform-php-1 bash
.PHONY: bash
