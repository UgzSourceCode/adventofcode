import { loadEnv } from "@aoc/aoc-utils";
import { day1, day2, day3 } from "./days";

console.log("Running Advent of Code - 2025");
loadEnv();
day1().then(() => {
  day2().then(() => {
    day3();
  });
});
