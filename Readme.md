# Advent of Code Solutions

**My personal solutions to Advent of Code challenges in TypeScript.**  
Monorepo structure with one application per year, featuring example-based tests and a Node.js CLI for running solutions on my personal input data.

## Project Structure

```
adventofcode/
├── 2025/ # 2025 solutions
│ ├── src/
│ │ ├── day01/
│ │ │ ├── solution.ts # Core solution logic
│ │ │ └── solution.test.ts # Tests using AoC examples
│ │ └── day02/
│ │ ├── solution.ts
│ │ └── solution.test.ts
│ ├── cli.ts # Node.js CLI application
│ ├── inputs/ # My personal input data (.gitignore)
│ ├── package.json
│ └── tsconfig.json
├── 2024/ # 2024 solutions (same structure)
├── README.md
├── package.json # Root monorepo config
└── tsconfig.json
```

## Quick Start

### Clone repository
```bash
git clone git@github.com:UgzSourceCode/adventofcode.git
cd adventofcode
```

### Install dependencies
```bash
npm install
```

### Run tests for specific day (2025 day 1)
```bash
npm run test:2025:1
```

### Run CLI solution (2025 day 1)
```bash
npm run run:2025:1
```

### Test entire year
```bash
npm run test:2025
```

## Solution Architecture

### Tests
- Use official Advent of Code example inputs
- Cover both Part 1 and Part 2
- Powered by Jest + ts-jest

### CLI Application
Usage: `npm run run:DAY [--input FILENAME]`

Examples:
```
npm run run:1 # Uses inputs/day01.txt
npm run run:1 --input my-input.txt
```

### Inputs Directory
- Contains my personal puzzle input files (`inputs/dayXX.txt`)
- Protected by `.gitignore`

## Tech Stack
- **TypeScript** 5.x
- **Node.js** 20+
- **Jest** for testing
- **ESBuild** for fast builds (optional)
- **pnpm** recommended for monorepo
- **Turbo** turborepo manager

## License
MIT License - Feel free to use my solutions as reference! 🎄