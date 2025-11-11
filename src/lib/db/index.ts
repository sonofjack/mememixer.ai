import { createServerOnlyFn } from "@tanstack/react-start";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/env/server";

import * as schema from "~/lib/db/schema";

// Lazy initialization to avoid crashes on missing env vars during build
let driver: ReturnType<typeof postgres> | null = null;

const getDriver = () => {
  if (!driver) {
    driver = postgres(env.DATABASE_URL);
  }
  return driver;
};

const getDatabase = createServerOnlyFn(() =>
  drizzle({ client: getDriver(), schema, casing: "snake_case" }),
);

export const db = getDatabase();
