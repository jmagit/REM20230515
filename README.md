# Curso de APIs

## Contenedor
- docker run -d -p 4321:4321 --name mock-web-server jamarton/mock-web-server:latest
- docker run -d --name mysql-sakila -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 jamarton/mysql-sakila
- docker run -d --name mongodb -p 27017:27017 mongo
- docker run --name redis -p 6379:6379 -d redis
- docker run -d --name web-for-testing -p 8181:8181 jamarton/web-for-testing

## Workspace Postman
- <https://www.postman.com/red-flare-4265/workspace/cursov>