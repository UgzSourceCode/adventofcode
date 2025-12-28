import { RotationDirection } from "./day1.types";

const inputData =
  "L68\n" + "L30\n" + "R48\n" + "L5\n" + "R60\n" + "L55\n" + "L1\n" + "L99\n" + "R14\n" + "L82\n";

const partiallyFirstStarResult = [50, 82, 52, 0, 95, 55, 0, 99, 0, 14, 32];

const finallyFirstStarResult = 3;

export const day1Mocks = {
  inputData,
  preStep: [
    {
      direction: RotationDirection.Left,
      number: 68,
    },
    {
      direction: RotationDirection.Left,
      number: 30,
    },
    {
      direction: RotationDirection.Right,
      number: 48
    },
    {
      direction: RotationDirection.Left,
      number: 5,
    },
    {
      direction: RotationDirection.Right,
      number: 60,
    },
    {
      direction: RotationDirection.Left,
      number: 55,
    },
    {
      direction: RotationDirection.Left,
      number: 1,
    },
    {
      direction: RotationDirection.Left,
      number: 99,
    },
    {
      direction: RotationDirection.Right,
      number: 14,
    },
    {
      direction: RotationDirection.Left,
      number: 82,
    }
  ],
  firstStar: {
    partiallyResult: partiallyFirstStarResult,
    finallyResult: finallyFirstStarResult,
  },
};
