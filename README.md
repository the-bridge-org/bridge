# Bridge

## Prerequisite

- [Node.js](https://nodejs.org/dist/v10.16.3/): v10.16.3
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install)

## Before Developing

- Clone Repository

  ```bash
  git clone https://github.com/the-bridge-org/bridge.git && cd bridge
  ```

- Install dependencies

  ```bash
  yarn
  ```

- Duplicate all dotenv files

  ```bash
  cp packages/app/.env.example packages/app/.env
  cp packages/server/.env.example packages/server/.env
  ```

## Start Developing

1. Start Postgres

   ```bash
   docker-compose up -d
   ```

2. Run server and app

   ```bash
   yarn start
   ```

## Resources

- app

  - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  - [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
  - [React Apollo](https://www.apollographql.com/docs/react/data/queries/)

- server

  - [Type GraphQL](https://typegraphql.ml/docs/getting-started.html)
  - [TypeORM](https://typeorm.io/#/)
