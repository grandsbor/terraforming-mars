import {Player} from '../Player';
import {SelectSpace} from '../inputs/SelectSpace';
import {ISpace} from '../boards/ISpace';
import {SpaceType} from '../common/boards/SpaceType';
import {DeferredAction, Priority} from './DeferredAction';

export class PlaceOceanTile implements DeferredAction {
  public priority = Priority.PLACE_OCEAN_TILE;
  constructor(
        public player: Player,
        public title: string = 'Select space for ocean tile',
  ) {}

  public execute() {
    if (!this.player.game.canAddOcean()) {
      return undefined;
    }

    return new SelectSpace(
      this.title,
      this.player.game.board.getAvailableSpacesForOcean(this.player),
      (space: ISpace) => {
        this.player.game.addOceanTile(this.player, space.id, SpaceType.OCEAN);
        return undefined;
      },
    );
  }
}
