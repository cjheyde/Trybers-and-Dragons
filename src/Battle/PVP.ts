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

  // da o veredito da batalha: 1 if player wins, -1 otherwise
  fight(): number {
    if (this.char1.levelUp >= this.char2.levelUp) {
      this.char1.attack(this.char2);
    }
    this.char2.attack(this.char1);
    return super.fight();
  }
}

export default PVP;
