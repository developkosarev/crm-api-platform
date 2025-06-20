# API

The API will be here.

Refer to the [Getting Started Guide](https://api-platform.com/docs/distribution) for more information.

## Docs
https://localhost/docs

## Commands
```
php bin/console lexik:jwt:generate-keypair
php bin/console app:create-user user@example.com password123 ROLE_ADMIN
```

## Commands routes /api/token/refresh
```
php bin/console debug:router
```

## Migration 
```
php bin/console doctrine:migrations:diff
php bin/console doctrine:migrations:execute --up 'DoctrineMigrations\Version20250607125120'
php bin/console doctrine:migrations:execute --down 'DoctrineMigrations\Version20250607125120'
```

## Tags
```
git tag v0.0.3
git push --tags
```
