export interface Schedule {
	id: number;
	name: string;
	description: string;
	weekNumber: number;
	monday: Meal[];
	tuesday: Meal[];
	wednesday: Meal[];
	thursday: Meal[];
	friday: Meal[];
	saturday: Meal[];
	sunday: Meal[];
}

export interface ScheduleWeek {
	monday: Meal[];
	tuesday: Meal[];
	wednesday: Meal[];
	thursday: Meal[];
	friday: Meal[];
	saturday: Meal[];
	sunday: Meal[];
}

export interface Meal {
	recipeId: number | null | undefined;
	name: string;
}

export interface SchedulesState {
	schedules: Schedule[];
	schedule: Schedule;
	loading: boolean;
	error: null;
}
