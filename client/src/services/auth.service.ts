import { IResponeUserData } from './../types/types'
import { IUserData } from '../types/types'
import { instance } from '../api/axios.api'

export const AuthService = {
	async registartion(
		userData: IUserData
	): Promise<IResponeUserData | undefined> {
		const { data } = await instance.post<IResponeUserData>('user', userData)

		return data
	},
	// async login() {},
	// async getMe() {},
}

// 31:30
