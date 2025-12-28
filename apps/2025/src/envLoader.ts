import path from "node:path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(process.cwd(), "../../.env"),
});

export const loadEnv = () => {
  if (!process.env.AOC_SESSION) {
    throw new Error("AOC_SESSION not loaded from root .env");
  }
};
