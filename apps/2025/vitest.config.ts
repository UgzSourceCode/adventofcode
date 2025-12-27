import sharedConfig from "@aoc/vitest-config/base";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(sharedConfig, defineConfig({}));
