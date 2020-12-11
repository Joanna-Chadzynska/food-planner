import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Schedule, SchedulesState } from 'models/interfaces/Schedule';

const initialState: SchedulesState = {
	schedules: [],
	schedule: {} as Schedule,
	loading: true,
	error: null,
};

export const schedulesSlice = createSlice({
	name: 'schedules',
	initialState,
	reducers: {
		importSchedules: (state, { payload }: PayloadAction<Schedule[]>) => {
			state.schedules = payload;
		},
		decrement: (state) => {},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {},
	},
});

export const { importSchedules } = schedulesSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };

export const selectSchedules = (state: RootState) => state.schedules.schedules;
export const selectSchedule = (state: RootState) => state.schedules.schedule;

export default schedulesSlice.reducer;
