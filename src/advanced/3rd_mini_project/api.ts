export const CEO_FILE = "./ceos.json";
export const WORLD_LEADERS_FILE = "./world_leaders.json";

type Leader = {
  name: string;
  age: number;
  country: string;
  type: string;
};

type CEOFile = typeof CEO_FILE;
type LeaderFile = typeof WORLD_LEADERS_FILE;

type ClassData<T> = T extends LeaderFile ? Leader[] : string[];

const getData = async (pathToFile: string): Promise<unknown> => {
  const { default: fileData }= await import(pathToFile, { assert: { type: "json" } });
  console.log(fileData);
  return fileData;
};

const throwError = (message: string): never => {
  console.log("we encountered an error!");
  throw new Error(message);
};

const isValidData = <T extends CEOFile | LeaderFile>(
  data: unknown,
): data is ClassData<T> => {
  if (!Array.isArray(data)) return false;
  if (data.length && typeof data[0] === "string") return true;
  if (data.length && typeof data[0] === "object") return true;
  return false;
};

export class API<T extends LeaderFile | CEOFile> {
  private readonly data: ClassData<T>;

  constructor(data: ClassData<T>) {
    this.data = data;
  }

  public get getStoredData(): ClassData<T> {
    return this.data;
  }

  public static async init<T extends LeaderFile | CEOFile>(pathToFile: T) {
    const data = await getData(pathToFile);
    if (isValidData<T>(data)) return new API<T>(data);
    return throwError("invalid leaderType provided!");
  }
}
