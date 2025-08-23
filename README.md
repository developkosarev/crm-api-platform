## Domains
```
127.0.0.1 belvexa.local www.belvexa.local crm.belvexa.local shopware.belvexa.local
```

## Git
```
git remote add origin-belvexa git@github.com:belvexa/crm-api-platform.git
git push origin-belvexa master
```

## Traefik
```
docker compose -f compose.proxy.yml up -d
docker compose -f compose.proxy.yml stop
```
