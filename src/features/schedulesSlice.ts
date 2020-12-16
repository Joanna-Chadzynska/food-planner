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
			state.loading = false;
			state.error = null;
		},
		filterSchedulesById: (state, { payload }: PayloadAction<Schedule>) => {
			state.schedules = state.schedules.filter(
				(item) => item.id === payload.id
			);
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {},
	},
});

export const { importSchedules, filterSchedulesById } = schedulesSlice.actions;

export const selectSchedules = (state: RootState) => state.schedules.schedules;
export const selectSchedule = (state: RootState) => state.schedules.schedule;

export default schedulesSlice.reducer;
