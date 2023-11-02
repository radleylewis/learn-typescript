/**
 * Abstract Classes
 **/

abstract class SportsCar {
  abstract skid(): void;

  getChicks(): number {
    return 10;
  }
}

class Porsche extends SportsCar {
  skid() {
    return "Massive skid";
  }
}

const porsche = new Porsche().getChicks();
