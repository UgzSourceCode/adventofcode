import { beforeEach, describe, expect, test } from "vitest";
import {
  calculatePositions,
  calculatePositionsWithAdditionalZeroPoint,
  detectPassword,
  firstStar,
  readDataFromString,
  secondStar,
} from "./day1";
import { day1Mocks } from "./day1.mocks";

describe("Test for day 1", () => {
  let mocks: typeof day1Mocks;

  beforeEach(() => {
    mocks = day1Mocks;
  });

  test("Check reading data", () => {
    const data = readDataFromString(mocks.inputData);
    expect(data).toStrictEqual(mocks.dialOperation);
  });

  test("Check calculated positions", () => {
    const positions = calculatePositions(mocks.dialOperation);
    expect(positions).toStrictEqual(mocks.firstStar.partiallyResult);
  });

  test("Check detected password", () => {
    const password = detectPassword(mocks.firstStar.partiallyResult);
    expect(password).toBe(mocks.firstStar.finallyResult);
  });

  test("Check first star result", () => {
    const result = firstStar(mocks.inputData);
    expect(result).toBe(mocks.firstStar.finallyResult);
  });

  test("Check calculated positions for password method 0x434C49434B", () => {
    const positions = calculatePositionsWithAdditionalZeroPoint(mocks.dialOperation);
    expect(positions).toStrictEqual(mocks.secondStar.partiallyResult);
  });

  test("Check second star result", () => {
    const result = secondStar(mocks.inputData);
    expect(result).toBe(mocks.secondStar.finallyResult);
  });
});
