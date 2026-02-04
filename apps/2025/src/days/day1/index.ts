import { getInputFromAdventOfCode } from "@aoc/aoc-utils";
import { type DialOperation, RotationDirection } from "./day1.types";

const INPUT_LINK = "https://adventofcode.com/2025/day/1/input";

export const day1 = async () => {
  console.log("--- DAY 1 ---");
  const inputData = await getInputFromAdventOfCode(INPUT_LINK);
  console.log(`Result for first star is '${firstStar(inputData)}'.`);
  console.log(`Result for second star is '${secondStar(inputData)}'.`);
};

const INITIAL_POSITION = 50;
const STEP = 1;
const MIN_POSITION = 0;
const MAX_POSITION = 99;
const MODULO = MAX_POSITION + STEP;

export const readDataFromString = (data: string): DialOperation[] => {
  return data
    .split("\n")
    .filter((line) => line !== "")
    .map((line: string): DialOperation => {
      if (line.startsWith("R") && line.startsWith("L")) {
        throw new Error("2025: Day 1: Wrong direction character");
      }

      return {
        direction: line.startsWith("L") ? RotationDirection.Left : RotationDirection.Right,
        number: parseInt(line.slice(1), 10),
      };
    });
};

export const calculatePositions = (dialData: DialOperation[]) => {
  let currentPosition = INITIAL_POSITION;
  const positions: number[] = [INITIAL_POSITION];
  dialData.forEach((dialOperation) => {
    currentPosition =
      dialOperation.direction === RotationDirection.Left
        ? (MODULO + (currentPosition - (dialOperation.number % MODULO))) % MODULO
        : (currentPosition + dialOperation.number) % MODULO;

    positions.push(currentPosition);
  });

  return positions;
};

export const detectPassword = (positions: number[]) => {
  return positions.reduce((acc, currentPosition) => acc + (currentPosition === 0 ? 1 : 0), 0);
};

export const firstStar = (data: string) => {
  const dialOperations = readDataFromString(data);
  const positions = calculatePositions(dialOperations);

  return detectPassword(positions);
};

export const calculatePositionsWithAdditionalZeroPoint = (dialOperations: DialOperation[]) => {
  let currentPosition = INITIAL_POSITION;
  const positions: number[] = [INITIAL_POSITION];

  dialOperations.forEach((dialOperation) => {
    let newPosition = currentPosition;
    for (let i = 0; i < dialOperation.number; i += STEP) {
      if (dialOperation.direction === RotationDirection.Left) {
        newPosition -= 1;
      } else {
        newPosition += 1;
      }

      if (newPosition === MIN_POSITION - STEP) {
        newPosition = MAX_POSITION;
      } else if (newPosition === MODULO) {
        newPosition = MIN_POSITION;
      }
      if (newPosition === MIN_POSITION || i === dialOperation.number - STEP) {
        positions.push(newPosition);
      }
    }
    currentPosition = newPosition;
  });
  return positions;
};

export const secondStar = (data: string) => {
  const dialOperations = readDataFromString(data);
  const positions = calculatePositionsWithAdditionalZeroPoint(dialOperations);

  return detectPassword(positions);
};
