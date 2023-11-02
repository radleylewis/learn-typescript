/**
 * Classes
 **/

enum VehicleType {
  CAR = "CAR",
  BUS = "BUS",
  TANK = "TANK",
}

type CarInitParams = {
  make: string;
  owner: string;
  type: VehicleType;
};

abstract class Vehicle {
  readonly #make: string;
  readonly #type: VehicleType;
  private owner: string;

  constructor({ make, type, owner }: CarInitParams) {
    this.#make = make;
    this.#type = type;
    this.owner = owner;
  }

  protected get vehiceType(): VehicleType {
    return this.#type;
  }

  protected get vehicleMake(): string {
    return this.#make;
  }

  protected get vehiceOwner(): string {
    return this.owner;
  }

  protected set newOwner(newOwner: string) {
    this.owner = newOwner;
  }

  getSound(): void {
    return;
  }
}

class Car extends Vehicle {
  public set carOwner(newOwner: string) {
    this.newOwner = newOwner;
  }

  public changeCarOwner(newOwner: string): this {
    this.newOwner = newOwner;
    return this;
  }

  public override sound(): string {
    return "Vroooom";
  }

  public static init({ make, owner, type }: Partial<CarInitParams>): Car {
    if (!make) throw new Error("please provide a make!");
    if (!type) throw new Error("please provide a type!");
    if (!owner) throw new Error("please provide a owner!");
    return new Car({ make, type, owner });
  }
}

const car = Car.init({ make: "BMW", owner: "Rad", type: VehicleType.TANK });
