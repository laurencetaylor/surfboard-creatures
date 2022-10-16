import {Species} from './Constants/Species';
import {Creature} from './Interfaces/Creature';

class Shark extends Creature {
  readonly species = Species.SWIMMER;

  readonly healthPoints = 80;
  readonly combatPoints = 15;
}

export {Shark};
