type UserData = {
  age: number;
  name: string;
  location: string;
};

const exampleObject: Record<string, UserData> = {
  hello: {
    age: 88,
    name: "Patricia",
    location: "Beijing",
  },
};

// ######################################### //

const getUser = (id: string) => {
  const result = exampleObject[id];
  if (!result) throw new Error("not found");
  return result;
};

type UserDataFromGetUser = ReturnType<typeof getUser>;
