import { DialOperation, RotationDirection } from "./day1.types";

export const day1 = () => {
  firstStar();
  secondStar();
};

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

const firstStar = () => {};

const secondStar = () => {};
