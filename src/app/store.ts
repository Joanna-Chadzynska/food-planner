import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import recipesReducer from 'features/recipesSlice';
import schedulesReducer from 'features/schedulesSlice';
import shoppingListsReducer from 'features/shoppingListsSlice';
import userReducer from 'features/userSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		recipes: recipesReducer,
		schedules: schedulesReducer,
		shoppingLists: shoppingListsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
