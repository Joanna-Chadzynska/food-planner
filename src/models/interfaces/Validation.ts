import { Recipe } from './Recipe';
import { Schedule } from './Schedule';
import { ShoppingList } from './ShopList';

export type Validation = Recipe | Schedule | ShoppingList;

export enum Type {
	recipe = 'RECIPE',
	schedule = 'SCHEDULE',
	shopping = 'SHOPPING',
	user = 'USER',
}
