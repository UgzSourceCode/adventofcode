import { getInputFromAdventOfCode } from "@aoc/aoc-utils";
import type { Range } from "./day2.types";

const INPUT_LINK = "https://adventofcode.com/2025/day/2/input";

export const day2 = async () => {
  console.log("--- DAY 2 ---");
  const inputData = await getInputFromAdventOfCode(INPUT_LINK);
  console.log(`Result for first star is '${firstStar(inputData)}'.`);
  console.log(`Result for second star is '${secondStar(inputData)}'.`);
};

export const readStringRangesFromInputString = (data: string) => {
  return data
    .split(",")
    .filter((stringRange) => stringRange !== "")
    .map((stringRange) => stringRange.replace("\n", ""));
};

export const parseStringRangesToObject = (stringRanges: string[]) => {
  return stringRanges.map((stringRange) => {
    const range = stringRange.split("-");

    return {
      low: Number(range[0]),
      high: Number(range[1]),
    };
  });
};

export const checkIsNotCorrectId = (id: number): boolean => {
  const str = id.toString();
  if (str.length % 2 !== 0) {

    return false;
  }
  const half = str.length / 2;

  const firstPart = str.slice(0, half);
  const secondPart = str.slice(half);
  return firstPart === secondPart;

};

export const findWrongIds = (ranges: Range[]) => {

  const wrongIds: number[] = [];
  for (const range of ranges) {
    for (let i = range.low; i <= range.high; i++) {
      if (checkIsNotCorrectId(i)) {
        wrongIds.push(i);
      }
    }
  }
  return wrongIds;
};

export const sumOfWrongsIds = (ids: number[]) => {
  const sum = ids.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  return sum;
};

export const firstStar = (data: string): number => {
  const idsAsString = readStringRangesFromInputString(data);
  const ranges = parseStringRangesToObject(idsAsString);
  const wrongIds = findWrongIds(ranges);
  const sum = sumOfWrongsIds(wrongIds);

  return sum;
};

export const secondStar = (_data: string): number => {
  throw new Error("Not implemented.");
};
