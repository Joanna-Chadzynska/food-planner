import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Schedule, SchedulesState } from 'models/interfaces/Schedule';

const initialState: SchedulesState = {
	schedules: [],
	schedule: {
		id: 0,
		name: '',
		description: '',
		weekNumber: 1,
		monday: [
			{ name: 'breakfast', recipeId: null },
			{ name: 'lunch', recipeId: null },
			{ name: 'soup', recipeId: null },
			{ name: 'dinner', recipeId: null },
			{ name: 'supper', recipeId: null },
		],
		tuesday: [
			{ name: 'breakfast', recipeId: null },
			{ name: 'lunch', recipeId: null },
			{ name: 'soup', recipeId: null },
			{ name: 'dinner', recipeId: null },
			{ name: 'supper', recipeId: null },
		],
		wednesday: [
			{ name: 'breakfast', recipeId: null },
			{ name: 'lunch', recipeId: null },
			{ name: 'soup', recipeId: null },
			{ name: 'dinner', recipeId: null },
			{ name: 'supper', recipeId: null },
		],
		thursday: [
			{ name: 'breakfast', recipeId: null },
			{ name: 'lunch', recipeId: null },
			{ name: 'soup', recipeId: null },
			{ name: 'dinner', recipeId: null },
			{ name: 'supper', recipeId: null },
		],
		friday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
		saturday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
		sunday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
	},
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
		importScheduleById: (state, { payload }: PayloadAction<Schedule>) => {
			state.schedule = payload;
		},
		addSchedule: (state, { payload }: PayloadAction<Schedule>) => {
			const {
				name,
				description,
				weekNumber,
				monday,
				tuesday,
				wednesday,
				thursday,
				friday,
				saturday,
				sunday,
			} = payload;
			state.schedule.name = name;
			state.schedule.description = description;
			state.schedule.weekNumber = weekNumber;
			state.schedule.monday = monday;
			state.schedule.tuesday = tuesday;
			state.schedule.wednesday = wednesday;
			state.schedule.thursday = thursday;
			state.schedule.friday = friday;
			state.schedule.saturday = saturday;
			state.schedule.sunday = sunday;
		},
	},
});

export const {
	importSchedules,
	filterSchedulesById,
	importScheduleById,
	addSchedule,
} = schedulesSlice.actions;

export const selectSchedules = (state: RootState) => state.schedules.schedules;
export const selectSchedule = (state: RootState) => state.schedules.schedule;

export default schedulesSlice.reducer;
