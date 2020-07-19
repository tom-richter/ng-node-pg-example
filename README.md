# Angular-NodeJS-Express-Postgres-Docker-Minimal-Example

## Installation

### Angular Frontend
`cd frontend/`

`npm install`

### Node Backend
`cd backend/`

`npm install`

### Postgres Database
`cd database/`

`docker run --name example-db -v "$PWD"/:/opt/ -p 5433:5432 -e POSTGRES_PASSWORD=1234 -d postgres`

`docker exec -it example-db psql -U postgres -f /opt/script.sql`

## Normal Start

### Angular
`ng serve`

### Node Backend
`npm run dev`

### Database
`docker start example-db`

## Other Stuff

Connect to DB Shell

`docker exec -it example-db psql -U postgres`