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

3. View in browser

   - Front End: [http://localhost:3000](http://localhost:3000)
   - Back End: [http://localhost:4000](http://localhost:4000)

## Resources

- app

  - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  - [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
  - [React Apollo](https://www.apollographql.com/docs/react/data/queries/)

- server

  - [Type GraphQL](https://typegraphql.ml/docs/getting-started.html)
  - [TypeORM](https://typeorm.io/#/)

## Wiki Page

[Bridge Wiki](https://www.notion.so/thebridgeorg/Wiki-3d64fe29697d44b9a4d77be3ce36bb9f)
