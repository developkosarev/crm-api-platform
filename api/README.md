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


## Patch
```
"patches": {
    "gesdinet/jwt-refresh-token-bundle": {
        "Fix nullable type hint in RefreshTokenAuthenticator (https://gist.github.com/LucianoVandi/5fc0b9e6bfb5155e69ddcd019cbd4a3e)": "patches/gesdinet/jwt-refresh-token-bundle/fix-nullable-type.patch"
    }
}
```
