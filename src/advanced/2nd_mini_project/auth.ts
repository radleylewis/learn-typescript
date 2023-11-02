/**
 * Decorators in TypeScript
 **/

import { Credentials } from "./008_generics";

type UserAuthRights = [password: string, rights: "USER" | "ADMIN"];

interface UsersObject {
  [key: string]: UserAuthRights;
}

const users: UsersObject = {
  boris: ["admin1234", "USER"],
  harry: ["daddyhurtme", "USER"],
  daisy: ["thisisapassword", "ADMIN"],
};

function ensureAdmin(
  _target: object,
  _key: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (
    this: Auth,
    ...args: [user: string, userToDelete: string]
  ) {
    const [user] = args;
    const [, rights] = this.users[user] || [];

    if (rights !== "ADMIN") throw new Error("Only admins can delete users!");

    originalMethod.apply(this, args);
  };

  return descriptor;
}

export class Auth {
  users: Record<string, UserAuthRights> = users;

  authenticate({
    username,
    password,
  }: Credentials):
    | [authenticated: true, rights: "USER" | "ADMIN"]
    | [authenticated: false] {
    const user = this.users[username];
    if (user) {
      const [pw, rights] = user;
      if (pw === password) return [true, rights];
    }
    return [false];
  }

  @ensureAdmin
  public deleteUser(_user: string, userToDelete: string): void {
    console.log("deleting...", userToDelete);
    delete this.users[userToDelete];
  }
}
