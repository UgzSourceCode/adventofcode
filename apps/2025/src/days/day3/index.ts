import { getInputFromAdventOfCode } from "@aoc/aoc-utils";

const INPUT_LINK = "https://adventofcode.com/2025/day/3/input";

export const day3 = async () => {
  console.log("--- DAY 3 ---");
  const inputData = await getInputFromAdventOfCode(INPUT_LINK);
  console.log(`Result for first star is '${firstStar(inputData)}'.`);
  console.log(`Result for second star is '${secondStar(inputData)}'.`);
};

export const readBanksString = (data: string): string[] => {
  return data.split("\n").filter((line) => line.length > 0);
};

export const analysisTwoDigitBank = (bank: string): number => {
  let firstDigit: number | undefined;
  let secondDigit: number | undefined;

  for (let i = 0; i < bank.length; i++) {
    const currentDigit = Number(bank[i]);
    if ((!firstDigit || firstDigit < currentDigit) && i < bank.length - 1) {
      firstDigit = currentDigit;
      secondDigit = Number(bank[i + 1]);
    } else if (secondDigit && secondDigit < currentDigit) {
      secondDigit = currentDigit;
    }
  }

  if (firstDigit && secondDigit) {
    return Number(String(firstDigit) + String(secondDigit));
  }
  throw new Error(`Bank ${bank} is not a valid input.`);
};

export const foundLargestJoltages = (
  banks: string[],
  analysisCallback: (bank: string) => number,
): number[] => {
  return banks.map((bank) => analysisCallback(bank));
};

export const sumJoltage = (joltages: number[]) => {
  return joltages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const firstStar = (data: string): number => {
  const banksData = readBanksString(data);
  const joltages = foundLargestJoltages(banksData, analysisTwoDigitBank);
  return sumJoltage(joltages);
};

const secondStar = (_data: string): number => {
  throw new Error("Not implemented.");
};
