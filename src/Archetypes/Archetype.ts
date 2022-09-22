import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;  

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  // quantidade de instâncias criadas a partir das classes estendidas da classe Race
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  //  quantidade máxima de pontos de vida da raça
  abstract get energyType(): EnergyType;
}

export default Archetype;
