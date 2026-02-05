import { beforeEach, describe, expect, it, test } from "vitest";
import { day3Mocks } from "./day3.mocks";
import {
  analysisTwelveDigitBank,
  analysisTwoDigitBank,
  foundLargestJoltages,
  readBanksString,
  sumJoltage,
} from "./index";

describe("Test for day 3", () => {
  let mocks: typeof day3Mocks;

  beforeEach(() => {
    mocks = day3Mocks;
  });

  test("Should read banks data as array of strings", () => {
    const banks = readBanksString(mocks.inputData);
    expect(banks).toStrictEqual(mocks.banksData);
  });

  it.each([
    [day3Mocks.banksData[0], day3Mocks.firstStar.partial[0]],
    [day3Mocks.banksData[1], day3Mocks.firstStar.partial[1]],
    [day3Mocks.banksData[2], day3Mocks.firstStar.partial[2]],
    [day3Mocks.banksData[3], day3Mocks.firstStar.partial[3]],
  ])("Should analysis largest joltages for bank %s for first star (two digit)", (bankData, largestJoltage) => {
    if (bankData && largestJoltage) {
      const bankResult = analysisTwoDigitBank(bankData);
      expect(bankResult).toBe(largestJoltage);
    }
  });

  it.each([
    [day3Mocks.banksData[0], day3Mocks.secondStar.partial[0]],
    [day3Mocks.banksData[1], day3Mocks.secondStar.partial[1]],
    [day3Mocks.banksData[2], day3Mocks.secondStar.partial[2]],
    [day3Mocks.banksData[3], day3Mocks.secondStar.partial[3]],
  ])("Should analysis largest joltages for bank %s for second star (twelve digit)", (bankData, largestJoltage) => {
    if (bankData && largestJoltage) {
      const bankResult = analysisTwelveDigitBank(bankData);
      expect(bankResult).toBe(largestJoltage);
    }
  });

  test("Should found largest joltages in first star", () => {
    const largestJoltages = foundLargestJoltages(mocks.banksData, analysisTwoDigitBank);
    expect(largestJoltages).toStrictEqual(mocks.firstStar.partial);
  });

  test("Should found largest joltages in second star", () => {
    const largestJoltages = foundLargestJoltages(mocks.banksData, analysisTwelveDigitBank);
    expect(largestJoltages).toStrictEqual(mocks.secondStar.partial);
  });

  test("Should calculate sum of largest joltages in first star", () => {
    const sum = sumJoltage(mocks.firstStar.partial);
    expect(sum).toBe(mocks.firstStar.finallyResult);
  });

  test("Should calculate sum of largest joltages in second star", () => {
    const sum = sumJoltage(mocks.secondStar.partial);
    expect(sum).toBe(mocks.secondStar.finallyResult);
  });
});
