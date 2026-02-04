import type { Range } from "./day2.types";

const inputData =
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,\n" +
  "1698522-1698528,446443-446449,38593856-38593862,565653-565659,\n" +
  "824824821-824824827,2121212118-2121212124";

const wrongIds: number[] = [11, 22, 99, 1010, 1188511885, 222222, 446446, 38593859];

const stringRanges = [
  "11-22",
  "95-115",
  "998-1012",
  "1188511880-1188511890",
  "222220-222224",
  "1698522-1698528",
  "446443-446449",
  "38593856-38593862",
  "565653-565659",
  "824824821-824824827",
  "2121212118-2121212124",
];

const ranges: Range[] = [
  {
    low: 11,
    high: 22,
  },
  {
    low: 95,
    high: 115,
  },
  {
    low: 998,
    high: 1012,
  },
  {
    low: 1188511880,
    high: 1188511890,
  },
  {
    low: 222220,
    high: 222224,
  },
  {
    low: 1698522,
    high: 1698528,
  },
  {
    low: 446443,
    high: 446449,
  },
  {
    low: 38593856,
    high: 38593862,
  },
  {
    low: 565653,
    high: 565659,
  },
  {
    low: 824824821,
    high: 824824827,
  },
  {
    low: 2121212118,
    high: 2121212124,
  },
];

const partialFirstStarResult = [11, 22, 99, 1010, 1188511885, 222222, 446446, 38593859];

const finallyFirstStarResult = 1227775554;

export const day2Mocks = {
  inputData,
  stringRanges,
  ranges,
  wrongIds,
  firstStar: {
    partial: partialFirstStarResult,
    finallyResult: finallyFirstStarResult,
  },
};
