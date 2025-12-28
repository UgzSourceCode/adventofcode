import { getInputFromAdventOfCode } from "@aoc/aoc-utils";
import { type Range } from "./day2.types";

const INPUT_LINK = "https://adventofcode.com/2025/day/2/input";

export const day2 = async () => {
  console.log("--- DAY 2 ---");
  const inputData = await getInputFromAdventOfCode(INPUT_LINK);
  console.log(`Result for first star is '${firstStar(inputData)}'.`);
  console.log(`Result for second star is '${secondStar(inputData)}'.`);
};

export const readStringRangesFromInputString = (_data: string) => {
  throw new Error("Not implemented");
};

export const parseStringRangesToObject = (_stringRanges: string[]) => {
  throw new Error("Not implemented");
};

export const findWrongIds = (_ranges: Range[]) => {
  throw new Error("Not implemented");
};

export const sumOfWrongsIds = (_ids: number[]) => {
  throw new Error("Not implemented");
};

export const firstStar = (_data: string): number => {
  throw new Error("Not implemented.");
};

export const secondStar = (_data: string): number => {
  throw new Error("Not implemented.");
};
