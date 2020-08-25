import { Post } from "./entities/Post";
import { __prod__ } from "./contants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User_ } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User_],
  dbName: "reddit",
  user: "postgres",
  password: "postgres",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];