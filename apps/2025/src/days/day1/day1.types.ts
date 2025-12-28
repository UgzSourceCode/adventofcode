export enum RotationDirection {
  Left,
  Right,
}

export type DialOperation = {
  direction: RotationDirection;
  number: number;
};
