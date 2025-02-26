
import {Message} from '../common/logs/Message';
import {PlayerInput} from '../PlayerInput';
import {Player} from '../Player';
import {PlayerInputTypes} from '../common/input/PlayerInputTypes';

export class SelectPlayer implements PlayerInput {
  public inputType: PlayerInputTypes = PlayerInputTypes.SELECT_PLAYER;
  constructor(public players: Array<Player>, public title: string | Message, public buttonLabel: string = 'Save', public cb: (player: Player) => PlayerInput | undefined) {
    this.buttonLabel = buttonLabel;
  }
}
