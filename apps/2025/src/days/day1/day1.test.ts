import { expect, test, describe, beforeEach } from "vitest";
import { readDataFromString } from "./day1";
import { day1Mocks } from "./day1.mocks";

describe("Test for day 1", () => {
  let mocks: typeof day1Mocks;

  beforeEach(() => {
    mocks = day1Mocks;
  });

  test("Check reading data", () => {
    const data = readDataFromString(mocks.inputData);
    expect(data).toStrictEqual(mocks.preStep);
  });
});
