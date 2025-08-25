# Ansible deployment

## Requirements
1. ansible-galaxy collection install community.docker
2. ansible-galaxy collection install community.mysql
3. ansible-galaxy collection install ansible.posix

## Test connection
1. ansible-playbook dev-ping.yml -i hosts.local
2. ansible-playbook dev-ping.yml -i hosts.local --list-tags
3. ansible-playbook dev-ping.yml -i hosts.private
4. ansible-playbook dev-ping.yml -i hosts.local

## Setup crm
1. ansible-playbook setup-crm-api-platform.yml -i hosts.local --list-tags
2. ansible-playbook setup-crm-api-platform.yml -i hosts.local --tags="crm-api-platform" --check
3. ansible-playbook setup-crm-api-platform.yml -i hosts.local --tags="nginx" --check

## Setup shop
1. ansible-playbook setup-crm-shopware.yml -i hosts.local --list-tags
2. ansible-playbook setup-crm-shopware.yml -i hosts.local --tags="crm-shopware" --check
