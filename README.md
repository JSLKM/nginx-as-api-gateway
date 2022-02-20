# nginx-as-api-gateway

## Docker

`docker run --name api-gateway -d -p 8080:8080 -v $PWD:/etc/nginx/conf.d nginx`

`docker exec -it api-gateway bash` to check etc/nginx/conf.d folder
`docker exec -it api-gateway nginx -s reload` to reload

## Services
Run node service: `node services/node/index.js`
Run python service: `python3 services/flask/main.py`

## Nginx

`nginx reload`

### Summary

- 1) `curl localhost:8080`