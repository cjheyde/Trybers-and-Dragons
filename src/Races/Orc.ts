import Race from './Race';

class Orc extends Race {
  static instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;  
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;