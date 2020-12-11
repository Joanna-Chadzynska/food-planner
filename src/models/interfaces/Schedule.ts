export interface Schedule {
	id: number;
	name: string;
	description: string;
	weekNumber: number;
	monday: number[];
	tuesday: number[];
	wednesday: number[];
	thursday: number[];
	friday: number[];
	saturday: number[];
	sunday: number[];
}

export interface SchedulesState {
	schedules: Schedule[];
	schedule: Schedule;
	loading: boolean;
	error: null;
}
