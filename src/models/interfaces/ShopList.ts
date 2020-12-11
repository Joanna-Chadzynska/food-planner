export interface ShoppingList {
	id: number;
	description: string;
	list: Product[];
}

export interface Product {
	id: number;
	name: string;
	quantity: number | null;
	product_weight: number;
	unit: string;
}

export interface ShoppingListsState {
	shoppingLists: ShoppingList[];
	shoppingList: ShoppingList;
	loading: boolean;
	error: null;
}
