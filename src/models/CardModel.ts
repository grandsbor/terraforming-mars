import {Message} from '../common/logs/Message';
import {CardType} from '../common/cards/CardType';
import {ResourceType} from '../common/ResourceType';
import {Units} from '../common/Units';
import {CardName} from '../common/cards/CardName';
import {Resources} from '../common/Resources';
import {CardDiscount} from '../cards/ICard';
import {Tags} from '../common/cards/Tags';

export interface CardModel {
    name: CardName;
    resources: number | undefined;
    resourceType: ResourceType | undefined;
    calculatedCost?: number;
    discount?: CardDiscount,
    cardType: CardType;
    isDisabled: boolean;
    warning?: string | Message;
    reserveUnits: Readonly<Units>; // Written for The Moon, but useful in other contexts.
    bonusResource?: Array<Resources>; // Used with the Mining cards and Robotic Workforce
    cloneTag?: Tags; // Used with Pathfinders
    startingMegacredits?: number;
}
