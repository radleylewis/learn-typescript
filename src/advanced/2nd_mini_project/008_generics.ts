/**
 * The danger of any: Auth Example
 **/

import { Auth } from "./auth";

export type Credentials = {
  username: string;
  password: string;
};

let userInput = {
  username: "daisy",
  password: "thisisapassword",
};

const auth = new Auth();

const authenticateUser = (creds: Credentials): boolean => {
  const [authenticated, rights] = auth.authenticate(creds);
  if (authenticated) {
    console.log(`User: ${creds.username} is authenticated as a ${rights}`);
    return true;
  } else {
    console.log(`Get out: ${creds.username}`);
    return false;
  }
};

if (authenticateUser(userInput)) {
  auth.deleteUser(userInput.username, "boris");
}
