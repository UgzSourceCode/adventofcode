import { beforeEach, describe, expect, test } from "vitest";
import { day2Mocks } from "./day2.mocks";
import {findWrongIds, parseStringRangesToObject, readStringRangesFromInputString, sumOfWrongsIds} from "./index";

describe("Tests for day 2", () => {
  let mocks: typeof day2Mocks;

  beforeEach(() => {
    mocks = day2Mocks;
  });

  test("Should read ranges from string as array of strings", () => {
    const ranges = readStringRangesFromInputString(mocks.inputData);
    expect(ranges).toStrictEqual(mocks.stringRanges);
  });

  test("Should parse string ranges to objects range", () => {
    const ranges = parseStringRangesToObject(mocks.stringRanges);
    expect(ranges).toStrictEqual(mocks.ranges);
  });

  test("Should find wrong ids", () => {
    const ids = findWrongIds(mocks.ranges);
    expect(ids).toStrictEqual(mocks.firstStar.partial);
  });

  test("Should calc sum of wrong ids", () => {
    const sumOfIds = sumOfWrongsIds(mocks.firstStar.partial);
    expect(sumOfIds).toBe(mocks.firstStar.finallyResult);
  });
});
