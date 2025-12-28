import { DialOperation, RotationDirection } from "./day1.types";

export const day1 = () => {
  firstStar();
  secondStar();
};

const INITIAL_POSITION = 50;
const MAX_POSITION = 99;
const MIN_POSITION = 0;

export const readDataFromString = (data: string): DialOperation[] => {
  return data.split("\n").filter(line => line !== "").map((line: string, id): DialOperation => {
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
  throw new Error("Not implemented");
}

const firstStar = () => {};

const secondStar = () => {};
