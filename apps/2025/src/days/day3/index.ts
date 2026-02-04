import { getInputFromAdventOfCode } from "@aoc/aoc-utils";

const INPUT_LINK = "https://adventofcode.com/2025/day/3/input";

export const day3 = async () => {
  console.log("--- DAY 3 ---");
  const inputData = await getInputFromAdventOfCode(INPUT_LINK);
  console.log(`Result for first star is '${firstStar(inputData)}'.`);
  console.log(`Result for second star is '${secondStar(inputData)}'.`);
};

export const readBanksString = (_data: string): string[] => {
  throw new Error("Not implemented");
};

export const analysisBank = (_bank: string): number => {
  throw new Error("Not implemented");
};

export const foundLargestJoltages = (_banks: string[]): number[] => {
  throw new Error("Not implemented");
};

export const sumJoltage = (_joltages: number[]) => {
  throw new Error("Not implemented");
};

const firstStar = (_data: string): number => {
  throw new Error("Not implemented.");
};

const secondStar = (_data: string): number => {
  throw new Error("Not implemented.");
};
