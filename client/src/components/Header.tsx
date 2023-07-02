import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/user/userSlice'
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper'
import { toast } from 'react-toastify'

const menu = [
	{ id: 1, path: '/', name: 'Home' },
	{ id: 2, path: '/categories', name: 'Categories' },
	{ id: 3, path: '/transactions', name: 'Transactions' },
]

const Header: FC = () => {
	const isAuth = useAuth()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const logoutHandler = () => {
		dispatch(logout())
		removeTokenFromLocalStorage('token')
		toast.success('Вы вышли из системы')
		navigate('/')
	}
	return (
		<header className=" flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
			<Link to="/">
				<FaBtc size={20} />
			</Link>
			{/*Menu*/}
			{isAuth && (
				<nav className="ml-auto mr-10">
					<ul className=" flex items-center gap-5">
						{menu.map((el) => (
							<li key={el.id}>
								<NavLink
									to={el.path}
									className={({ isActive }) =>
										isActive ? 'text-white' : 'text-white/50'
									}
								>
									{el.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			)}

			{/*Actions */}
			{isAuth ? (
				<button onClick={logoutHandler} className="btn btn-red">
					<span>Log Out</span>
					<FaSignOutAlt />
				</button>
			) : (
				<Link
					className="ml-auto py-2 text-white/50 hover:text-white"
					to={'auth'}
				>
					Log In / Sing In
				</Link>
			)}
		</header>
	)
}

export default Header
