import { ConnectionOptions } from "typeorm";

export const __database: { [_: string]: ConnectionOptions } = {
  default: {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port:
      (process.env.POSTGRES_PORT &&
        Number.parseInt(process.env.POSTGRES_PORT)) ||
      5432,
    username: process.env.POSTGRES_USER || "bridge",
    password: process.env.POSTGRES_PASSWORD || "bridge",
    database: process.env.POSTGRES_DB || "bridge",
    dropSchema: false,
    synchronize: true,
    entities: ["src/models/**/*.ts"],
  },
};
