import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ShoppingList, ShoppingListsState } from 'models/interfaces/ShopList';

const initialState: ShoppingListsState = {
	shoppingLists: [],
	shoppingList: {} as ShoppingList,
	loading: true,
	error: null,
};

export const shoppingListsSlice = createSlice({
	name: 'shoppingLists',
	initialState,
	reducers: {
		importShoppingLists: (
			state,
			{ payload }: PayloadAction<ShoppingList[]>
		) => {
			state.shoppingLists = payload;
			state.loading = false;
			state.error = null;
		},
		decrement: (state) => {},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {},
	},
});

export const { importShoppingLists } = shoppingListsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };

export const selectShoppingLists = (state: RootState) =>
	state.shoppingLists.shoppingLists;
export const selectShoppingList = (state: RootState) =>
	state.shoppingLists.shoppingList;

export default shoppingListsSlice.reducer;
