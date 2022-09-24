import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _charFighter: Fighter;
  private _monsters: SimpleFighter[];

  constructor(charFighter: Fighter, monsters: SimpleFighter[]) {
    super(charFighter);
    this._charFighter = charFighter;
    this._monsters = monsters;
  }

  get charFighter(): Fighter {
    return this._charFighter;
  }

  get monsters(): SimpleFighter[] {
    return this._monsters;
  }

  // da o veredito da batalha: 1 if player wins, -1 otherwise
  fight(): number {
    this._monsters.map((opponent) => {
      if (this.charFighter.lifePoints >= opponent.lifePoints) {
        this.charFighter.attack(opponent);
      }
      opponent.attack(this.charFighter);
      return super.fight();
    });
    return super.fight();
  }
}

export default PVE;
