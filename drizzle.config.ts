import { defineConfig } from "drizzle-kit";

// Optional database configuration - works without DATABASE_URL
const dbUrl = process.env.DATABASE_URL || "postgresql://localhost:5432/robotics_club";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});