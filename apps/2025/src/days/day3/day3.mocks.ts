const inputData =
  "987654321111111\n" + "811111111111119\n" + "234234234234278\n" + "818181911112111";

const banksData = ["987654321111111", "811111111111119", "234234234234278", "818181911112111"];

const partialFirstStarResult = [98, 89, 78, 92];
const partialSecondStarResult = [987654321111, 811111111119, 434234234278, 888911112111];

const finallyFirstStarResult = 357;
const finallySecondStarResult = 3121910778619;

export const day3Mocks = {
  inputData,
  banksData,
  firstStar: {
    partial: partialFirstStarResult,
    finallyResult: finallyFirstStarResult,
  },
  secondStar: {
    partial: partialSecondStarResult,
    finallyResult: finallySecondStarResult,
  }
};
