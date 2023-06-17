import { IResponeUserData, IUser, IUserData } from '../types/types'
import { instance } from '../api/axios.api'

export const AuthService = {
	async registartion(
		userData: IUserData
	): Promise<IResponeUserData | undefined> {
		const { data } = await instance.post<IResponeUserData>('user', userData)

		return data
	},
	async login(userData: IUserData): Promise<IUser | undefined> {
		const { data } = await instance.post<IUser>('auth/login', userData)
		return data
	},
	async getProfile(): Promise<IUser | undefined> {
		const { data } = await instance.get<IUser>('auth/profile')
		if (data) return data
	},
}

// 31:30
