# Advent of Code Solutions

Advent of Code solutions (2024+) by Piotr 'Ugz' Bielski. Demonstrates monorepo approach with simple puzzle implementations.

## Project structure

The overall monorepo layout is shown in the diagram below.

```
.
├── apps/ # Yearly Advent of Code applications
│ └── 2025/ # CLI app for Advent of Code 2025
│ ├── src/
│ │ ├── cli.ts # Main entrypoint for running selected day
│ │ └── days/
│ │ └── day1/
│ │ ├── day1.ts # Day 1 puzzle solution
│ │ ├── day1.mocks.ts # Data/mocks for Day 1
│ │ └── day1.test.ts # Tests for Day 1
│ ├── biome.json # Biome config extending shared settings
│ ├── tsconfig.json # TS config extending shared settings
│ ├── vitest.config.ts # Vitest config extending shared settings
│ └── package.json # App-specific scripts and dependencies
├── packages/ # Shared configuration packages
│ ├── biome-config/ # Shared Biome configuration (base.json, etc.)
│ ├── typescript-config/ # Shared TypeScript configuration
│ └── vitest-config/ # Shared Vitest configuration
├── turbo.json # Turborepo pipeline configuration
├── pnpm-workspace.yaml # pnpm workspace definition
├── pnpm-lock.yaml # Locked dependency versions
├── tsconfig.json # Root TS project references/options
├── .gitignore # Repository-level ignore rules
└── README.md # Project documentation
```

## Stack

This project uses a small, opinionated toolchain focused on fast feedback and simple configuration sharing across the monorepo.

- **Node.js**: Runtime for all solutions and tooling. Requires Node 18+ (developed with Node 24).
- **TypeScript [5.9.3]**: Type-safe implementations of Advent of Code puzzles, with shared configs for all apps.
- **Vitest [4.0.16]**: Test runner for verifying each day’s solution and enabling fast TDD for puzzle code.
- **Biome [2.3.10]**: Unified linter and formatter, used both in apps and shared configuration packages.
- **Turbo [2.7.1]**: Task orchestrator for running scripts (tests, linting, builds) efficiently across the monorepo.
- **tsx [4.21.0]**: Convenient TypeScript execution in development for running the CLI without a separate build step.

## Quick setup

This section describes how to get the monorepo ready to run Advent of Code solutions locally: installing dependencies, running tests, and executing solutions for specific days.

### Configure .env

Copy `.env.example` to `.env`.

```bash
cp .env.example .env
```

#### Get AOC_SESSION Token

- Go to any input page: https://adventofcode.com/2025/day/1/input
- Open DevTools → Application / Storage → Cookies
- Copy the session cookie value (full token)
- Paste into .env:

```text
AOC_SESSION=paste_your_full_session_token_here
```

⚠️ Never commit .env – it's already in .gitignore.

### Dependency install

- Make sure you have Node.js (18 or newer) and pnpm installed.
- Clone this repository to your local machine.
- From the repository root, install all workspace dependencies with
```bash
pnpm install
```

If any of these steps are unclear or fail, please open a GitHub issue to help improve this setup section.

### Run tests

- From the repository root, run all tests for all apps using
```bash
pnpm test
```

#### Test selected day

- Run tests for a single day by targeting its test file - for example
```bash
pnpm vitest ./apps/2025/src/days/day1/day1.test.ts
```

### Run apps

- From the repository root, run the main CLI for the 2025 app - for example 
```bash
pnpm --filter 2025 dev
```

#### Run selected day

- Run a single day’s solution by passing the day identifier to the CLI - for example
```bash
pnpm --filter 2025 dev --day 1
```

## Development workflow

This section describes the typical day‑to‑day loop when working on new Advent of Code solutions in this monorepo.
- Start by adding or extending a day module under `apps/2025/src/days/` (for example `day2/day2.ts` and `day2.test.ts`).
- Use the CLI to run your solution for a given day while iterating on the implementation (for example `pnpm --filter 2025 dev --day 2`).
- Keep tests close to the implementation and run them frequently (for example `pnpm vitest ./apps/2025/src/days/day2/day2.test.ts`).
- Before committing, run formatting and linting for the relevant app to keep the codebase consistent (for example `pnpm --filter 2025 lint` and `pnpm --filter 2025 format`).
- When changes affect shared configs in `packages/*`, re‑run tests and checks for the apps that depend on those packages to ensure nothing broke.

## Scripts

This section summarizes the most important scripts used across the monorepo to keep everyday work predictable and consistent.
- `pnpm test`

Runs the test suite for all applications in the workspace via the shared test runner configuration.

- `pnpm --filter 2025 test`

Runs tests only for the 2025 Advent of Code application, which is useful when working on a single year.

- `pnpm --filter 2025 dev`

Starts the 2025 CLI in development mode so you can quickly execute solutions for specific days while iterating on the code.

- `pnpm --filter 2025 lint` / `pnpm --filter 2025 format`

Applies linting and formatting rules (via shared Biome configuration) to keep the codebase consistent before committing changes.

- `pnpm install`

Installs all dependencies for apps and shared configuration packages defined in the workspace, preparing the monorepo for development and testing.

## .gitignore

This project relies on both a global and a repository‑local ignore configuration. The goal is to keep the repository clean while still allowing IDEs and tools to work the way each developer prefers.

### Global

A global ignore file is recommended to keep IDE‑specific and OS‑specific artifacts out of all your Git repositories.

- Configure a global ignore file on your machine (for example `~/.gitignore_global`) and add entries for IDE metadata, local settings, and OS files (e.g. `.idea/`, `.vscode/`, `.DS_Store`, `Thumbs.db`).
- Make sure your Git configuration points to this file (for example `git config --global core.excludesFile ~/.gitignore_global`).
- The repository assumes such a global ignore exists; IDE folders are intentionally not listed in the project `.gitignore` so each developer can use their preferred tools without the repo dictating editor choices.

### Repository

The repository‑local .gitignore focuses on artifacts produced by this monorepo rather than editor preferences.
- Ignore dependency directories such as `node_modules/` and tool caches (for example `.turbo/`, coverage outputs, and other generated files).
- Ignore build and output directories created by running the CLI or future build steps (for example `dist/` if you introduce builds later).
- Do not add IDE‑specific folders here unless there is a strong project‑wide reason; prefer the global ignore for those so that `.gitignore` stays focused on reproducible outputs of this codebase.