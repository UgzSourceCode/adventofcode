import { beforeEach, describe, expect, test } from "vitest";
import { day1Mocks } from "./day1.mocks";
import { RotationDirection } from "./day1.types";
import {
  calculatePositions,
  calculatePositionsWithAdditionalZeroPoint,
  detectPassword,
  firstStar,
  readDataFromString,
  secondStar,
} from "./index";

describe("Tests for day 1", () => {
  let mocks: typeof day1Mocks;

  beforeEach(() => {
    mocks = day1Mocks;
  });

  test("Check reading data", () => {
    const data = readDataFromString(mocks.inputData);
    expect(data).toStrictEqual(mocks.dialOperations);
  });

  test("Check calculated positions", () => {
    const positions = calculatePositions(mocks.dialOperations);
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
    const positions = calculatePositionsWithAdditionalZeroPoint(mocks.dialOperations);
    expect(positions).toStrictEqual(mocks.secondStar.partiallyResult);
  });

  test("Check how it works from 0 point (R2, R48, L5)", () => {
    const positions = calculatePositionsWithAdditionalZeroPoint([
      {
        direction: RotationDirection.Right,
        number: 2,
      },
      {
        direction: RotationDirection.Right,
        number: 48,
      },
      {
        direction: RotationDirection.Left,
        number: 5,
      },
    ]);
    expect(positions).toStrictEqual([50, 52, 0, 95]);
  });

  test("Check how it works from 0 point (R5, L55, L1)", () => {
    const positions = calculatePositionsWithAdditionalZeroPoint([
      {
        direction: RotationDirection.Right,
        number: 5,
      },
      {
        direction: RotationDirection.Left,
        number: 55,
      },
      {
        direction: RotationDirection.Left,
        number: 1,
      },
    ]);
    expect(positions).toStrictEqual([50, 55, 0, 99]);
  });

  test("Check second star result", () => {
    const result = secondStar(mocks.inputData);
    expect(result).toBe(mocks.secondStar.finallyResult);
  });

  test("Check how many times you see zero point", () => {
    const result = calculatePositionsWithAdditionalZeroPoint([
      {
        direction: RotationDirection.Right,
        number: 1000,
      },
    ]);
    const hasBeenZeroPoint = result.filter((position) => position === 0).length;
    expect(hasBeenZeroPoint).toBe(10);
  });

  test("Check reddit suggestion with ending on 0 (L50,R50,L50,L50,R50,L50,R50,R50) should be 4", () => {
    const result = calculatePositionsWithAdditionalZeroPoint([
      {
        direction: RotationDirection.Left,
        number: 50,
      },
      {
        direction: RotationDirection.Right,
        number: 50,
      },
      {
        direction: RotationDirection.Left,
        number: 50,
      },
      {
        direction: RotationDirection.Right,
        number: 50,
      },
      {
        direction: RotationDirection.Left,
        number: 50,
      },
      {
        direction: RotationDirection.Right,
        number: 50,
      },
      {
        direction: RotationDirection.Right,
        number: 50,
      },
    ]);
    expect(result.filter((position) => position === 0).length).toBe(4);
  });
});
