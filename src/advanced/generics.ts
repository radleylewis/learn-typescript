/**
 * Generics
 **/

type River = {
  depth: number;
  width: number;
  length: number;
  name: string;
  localName: string;
  typeOfFish: string[];
  pollutionLevel: number;
};

type CustomPick<T, K extends keyof T> = {
  [k in K]: T[k];
};

type SlimRiverData = CustomPick<River, "name" | "length">;
