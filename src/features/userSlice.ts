import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { User } from 'models/interfaces/User';

const initialState: User = {
	name: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		importUser: (state, { payload }: PayloadAction<User>) => {
			state.name = payload.name;
		},
		setNewUser: (state, { payload }: PayloadAction<User>) => {
			state.name = payload.name;
		},
		updateUser: (state, { payload }: PayloadAction<User>) => {
			state.name = payload.name;
		},
	},
});

export const { importUser, setNewUser, updateUser } = userSlice.actions;

export const selectName = (state: RootState) => state.user.name;

export default userSlice.reducer;
