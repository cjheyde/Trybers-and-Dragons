import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _char1: Fighter;
  private _char2: Fighter;

  constructor(char1: Fighter, char2: Fighter) {
    super(char1);
    this._char1 = char1;
    this._char2 = char2;
  }

  get char1(): Fighter {
    return this._char1;
  }

  get char2(): Fighter {
    return this._char2;
  }

  fight(): number {
    if (this.char1.strength > this.char2.defense 
      || this.char2.strength > this.char1.defense) {
      this.char1.attack(this.char2);
    } else return 0;
    if (this.char1.lifePoints > -1 && this.char2.lifePoints > -1) {
      this.char2.attack(this.char1);
      return this.fight();
    }
    return super.fight();
  }
}

export default PVP;
