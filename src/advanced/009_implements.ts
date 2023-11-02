/**
 * Implements
 **/

interface BaseClass {
  log(): void;
  add(a: number, b: number): number;
}

interface Properties {
  thingToLog: string;
}

class AnyOldClass implements BaseClass, Properties {
  thingToLog: string = "hello world";

  log() {
    console.log("hello");
  }

  add(a: number, b: number) {
    return a + b;
  }
}
