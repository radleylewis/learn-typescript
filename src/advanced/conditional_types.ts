/**
 * Conditional Types & never
 **/

interface Id {
  id: number;
}

interface Name {
  name: string;
}

type NameOrId<T extends number | string | boolean> = T extends number
  ? Id
  : T extends string
  ? Name
  : never;

const nameOrId = <T extends number | string | boolean>(
  _idOrName: T,
): NameOrId<T> => {
  throw new Error("logic goes here");
};

let typescript = nameOrId("typescript");

let float = nameOrId(2.8);

let bool = nameOrId(true);
