export interface IUser {
	id: number
	email: string
	token: string
}

export interface IUserData {
	email: string
	password: string
}

export interface IResponeUser {
	email: string | undefined
	id: number
	createdAt: string
	updatedAt: string
	password: string
}

export interface IResponeUserData {
	token: string
	user: IResponeUser
}

export interface ICategory {
	title: string
	id: number
	createdAt: string
	updatedAt: string
	transactions: []
}
