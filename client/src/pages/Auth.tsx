import { FC, useState } from 'react'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'
import { setTokenToLocalStorage } from '../helpers/localstorage.helper'
import { useAppDispatch } from '../store/hooks'
import { login } from '../store/user/userSlice'
import { useNavigate } from 'react-router-dom'
// 1:09:20
const Auth: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [isLogin, setIsLogin] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.login({ email, password })
			if (data) {
				setTokenToLocalStorage('token', data.token)
				dispatch(login(data))
				toast.success('Вы вошли в систему')
				navigate('/')
			}
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.registartion({ email, password })
			if (data) {
				toast.success('Аккаунт создан!')
				setIsLogin(!isLogin)
			}
			return data
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	return (
		<div className=" mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
			<h1 className=" mb-10 text-center text-xl">
				{isLogin ? 'Login' : 'Registration'}
			</h1>

			<form
				onSubmit={isLogin ? loginHandler : registrationHandler}
				className=" mx-auto flex w-1/3 flex-col gap-5"
			>
				<input
					type={'text'}
					className={'input'}
					placeholder={'Email'}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type={'password'}
					className={'input'}
					placeholder={'Password'}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" className="btn btn-green mx-auto">
					Sabmit
				</button>
			</form>

			<div className=" mt-5 flex justify-center">
				{isLogin ? (
					<button
						onClick={() => setIsLogin(!isLogin)}
						className=" text-slate-300 hover:text-white"
					>
						You don't have an account?
					</button>
				) : (
					<button
						onClick={() => setIsLogin(!isLogin)}
						className=" text-slate-300 hover:text-white"
					>
						Already have an accaunt?
					</button>
				)}
			</div>
		</div>
	)
}

export default Auth
