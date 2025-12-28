import { DialOperation, RotationDirection } from "./day1.types";

export const day1 = () => {
  firstStar();
  secondStar();
};

const INITIAL_POSITION = 50;
const MAX_POSITION = 99;
const MODULO = MAX_POSITION + 1;

export const readDataFromString = (data: string): DialOperation[] => {
  return data
    .split("\n")
    .filter((line) => line !== "")
    .map((line: string, id): DialOperation => {
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
  const positions: number[] = [50];
  dialData.forEach((dialOperation) => {
    currentPosition =
      dialOperation.direction === RotationDirection.Left
        ? (MODULO + (currentPosition - (dialOperation.number % MODULO))) % MODULO
        : (currentPosition + dialOperation.number) % MODULO;

    positions.push(currentPosition);
  });

  return positions;
};

const firstStar = () => {};

const secondStar = () => {};
