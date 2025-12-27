# @aoc/vitest-config

Shared Vitest configuration package used across the Advent of Code monorepo. It centralizes test runner options so applications can stay small and focused on puzzle code.

Used via `import sharedConfig from "@aoc/vitest-config/base"` in app‑level `vitest.config.ts` files, and then merged with app‑specific settings.