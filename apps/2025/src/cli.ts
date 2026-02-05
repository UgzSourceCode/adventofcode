import { getDayManager, loadEnv } from "@aoc/aoc-utils";
import { day1, day2, day3 } from "./days";

console.log("Running Advent of Code - 2025");
loadEnv();
const dayManager = getDayManager();
dayManager.addDay(day1);
dayManager.addDay(day2);
dayManager.addDay(day3);
dayManager.runAll();
