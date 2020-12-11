import axios, { AxiosInstance } from 'axios';
import { Recipe } from './interfaces/Recipe';
import { Schedule } from './interfaces/Schedule';
import { ShoppingList } from './interfaces/ShopList';
import { User } from './interfaces/User';

export class HttpClient {
	private readonly USER_ENDPOINT = '/user/';
	private readonly RECIPES_ENDPOINT = '/recipes/';
	private readonly SCHEDULES_ENDPOINT = '/schedules/';
	private readonly SHOPPING_LIST_ENDPOINT = '/shoppingLists/';

	protected readonly request: AxiosInstance;

	constructor(baseURL: string) {
		this.request = axios.create({
			baseURL,
		});
	}

	/**
	 * Method get from API user data
	 * @returns User
	 */

	public async getUser(): Promise<User> {
		try {
			const response = (await this.request.get(this.USER_ENDPOINT)).data;
			return response;
		} catch (error) {
			return error;
		}
	}

	/**
	 * Method post from API user data
	 * @returns User
	 */

	public async createUser(user: User): Promise<User> {
		try {
			const response = (await this.request.post(this.USER_ENDPOINT, user)).data;
			return response;
		} catch (error) {
			return error;
		}
	}

	/**
	 * Method patch from API user data
	 * @returns User
	 */

	public async clearUser(user: User): Promise<User> {
		try {
			const response = (await this.request.patch(this.USER_ENDPOINT, user))
				.data;

			return response;
		} catch (error) {
			return error;
		}
	}

	/**
	 * Method get from API all recipes
	 * @returns Recipe[]
	 */

	public async getRecipes(): Promise<Recipe[]> {
		return this.getAllElements(this.RECIPES_ENDPOINT);
	}

	/**
	 * Method get from API one recipe
	 * @param id: id of single recipe
	 * @returns Recipe || null
	 */

	public async getRecipeById(id: number): Promise<Recipe> {
		return this.getElementById(id, this.RECIPES_ENDPOINT);
	}

	/**
	 * Method get from API all schedules
	 * @returns Schedule[]
	 */

	public async getSchedules(): Promise<Schedule[]> {
		return this.getAllElements(this.SCHEDULES_ENDPOINT);
	}

	/**
	 * Method get from API one schedule
	 * @param id: id of single schedule
	 * @returns Schedule || null
	 */

	public async getScheduleById(id: number): Promise<Schedule> {
		return this.getElementById(id, this.SCHEDULES_ENDPOINT);
	}

	/**
	 * Method get from API all shopping lists
	 * @returns Schedule[]
	 */

	public async getShoppingLists(): Promise<ShoppingList[]> {
		return this.getAllElements(this.SHOPPING_LIST_ENDPOINT);
	}

	/**
	 * Method get from API one shopping list
	 * @param id: id of single shopping list
	 * @returns ShoppingList || null
	 */

	public async getShoppingListById(id: number): Promise<ShoppingList> {
		return this.getElementById(id, this.SHOPPING_LIST_ENDPOINT);
	}

	private async getAllElements<T>(endpoint: string): Promise<T[]> {
		try {
			const response = (await this.request.get(`${endpoint}`)).data;
			return response;
		} catch (error) {
			return [];
		}
	}

	private async getElementById<T>(id: number, endpoint: string): Promise<T> {
		try {
			const response = (await this.request.get(`${endpoint}${id}/`)).data;
			return response;
		} catch (error) {
			return error;
		}
	}
}
