import {CardName} from '../../common/cards/CardName';
import {Player} from '../../Player';
import {CardType} from '../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tags} from '../../common/cards/Tags';
import {CardRenderer} from '../render/CardRenderer';
import {MoonExpansion} from '../../moon/MoonExpansion';
import {MoonSpaces} from '../../moon/MoonSpaces';
import {Units} from '../../common/Units';
import {TileType} from '../../common/TileType';
import {IMoonCard} from './IMoonCard';
import {MoonCard} from './MoonCard';
import {AltSecondaryTag} from '../render/CardRenderItem';

export class MareNectarisMine extends MoonCard implements IProjectCard, IMoonCard {
  constructor() {
    super({
      name: CardName.MARE_NECTARIS_MINE,
      cardType: CardType.AUTOMATED,
      tags: [Tags.MOON, Tags.BUILDING],
      cost: 14,
      productionBox: Units.of({steel: 1}),
      reserveUnits: Units.of({titanium: 1}),
      tr: {moonMining: 1},

      metadata: {
        description: 'Spend 1 titanium. Increase your steel production 1 step. Place a mine ON THE RESERVED AREA and raise the Mining Rate 1 step.',
        cardNumber: 'M01',
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(1).nbsp;
          b.production((pb) => pb.steel(1));
          b.moonMine({secondaryTag: AltSecondaryTag.MOON_MINING_RATE}).asterix();
        }),
      },
    }, {
      tilesBuilt: [TileType.MOON_MINE],
    });
  }

  public override play(player: Player) {
    super.play(player);
    MoonExpansion.addMineTile(player, MoonSpaces.MARE_NECTARIS, this.name);
    MoonExpansion.raiseMiningRate(player);
    return undefined;
  }
}
