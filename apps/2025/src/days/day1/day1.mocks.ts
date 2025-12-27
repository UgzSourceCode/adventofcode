const inputData =
  "L68\n" + "L30\n" + "R48\n" + "L5\n" + "R60\n" + "L55\n" + "L1\n" + "L99\n" + "R14\n" + "L82\n";

const partiallyFirstStarResult = [50, 82, 52, 0, 95, 55, 0, 99, 0, 14, 32];

const finallyFirstStarResult = 3;

export const day1Mocks = {
  inputData,
  firstStar: {
    partiallyResult: partiallyFirstStarResult,
    finallyResult: finallyFirstStarResult,
  },
};
