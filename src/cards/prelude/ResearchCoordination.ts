import {CardType} from '../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tags} from '../../common/cards/Tags';
import {Card} from '../Card';
import {CardName} from '../../common/cards/CardName';

export class ResearchCoordination extends Card implements IProjectCard {
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.RESEARCH_COORDINATION,
      tags: [Tags.WILDCARD],
      cost: 4,

      metadata: {
        cardNumber: 'P40',
        description: 'After being played, when you perform an action, the wild tag counts as any tag of your choice.',
      },
    });
  }

  public play() {
    return undefined;
  }
}
