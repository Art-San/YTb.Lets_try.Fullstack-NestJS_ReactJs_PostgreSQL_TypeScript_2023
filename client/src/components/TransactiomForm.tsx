import React, { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form, Link, useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader } from '../types/types'
import CategoryModal from './CategoryModal'

const TransactiomForm: FC = () => {
	const [visibLeModal, setVisibLeModal] = useState<boolean>(false)
	const { categories } = useLoaderData() as IResponseTransactionLoader

	return (
		<div className=" rounded-md bg-slate-800 p-4">
			<Form className="grid gap-2" method="post" action="/transactions">
				<label className=" grid" htmlFor="title">
					<span>Title</span>
					<input
						className="input border-slate-700 "
						placeholder="Title..."
						name="title"
						type="text"
						required
					/>
				</label>
				<label className=" grid" htmlFor="amount">
					<span>Amount</span>
					<input
						className="input border-slate-700 "
						placeholder="Amount..."
						name="amount"
						type="number"
						required
					/>
				</label>

				{/*Select */}
				{categories.length ? (
					<label htmlFor="category" className=" grid">
						<span>Category</span>
						<select
							className="input border-slate-700 "
							name="category"
							required
						>
							{categories.map((el) => (
								<option key={el.id} value={el.id} className=" bg-slate-700 ">
									{el.title}{' '}
								</option>
							))}
							{/* <option value="1" className=" bg-slate-700 ">
								Salary
							</option>
							<option value="2" className=" bg-slate-700 ">
								Gift
							</option>
							<option value="3" className=" bg-slate-700 ">
								Grocery
							</option> */}
						</select>
					</label>
				) : (
					<p className=" mt-1 text-red-300">Нужно создать еатегорию</p>
				)}

				{/*ADD Category */}
				<button
					onClick={() => setVisibLeModal(true)}
					className=" flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
				>
					<FaPlus />
					{/* <Link to={'/categories'}> */}
					<span>Manage Catigories</span>
					{/* </Link> */}
				</button>

				{/*Radio Buttons */}
				<div className="flex items-center gap-4">
					<label className="flex cursor-pointer items-center gap-2">
						<input
							type="radio"
							name="type"
							value={'income'}
							className="form-radio text-green-600"
							defaultChecked
						/>
						<span>Income</span>
					</label>
					<label className="flex cursor-pointer items-center gap-2">
						<input
							type="radio"
							name="type"
							value={'expense'}
							className="form-radio text-red-600"
						/>
						<span>Expens</span>
					</label>
				</div>

				{/*Submit button */}

				<button className=" btn btn-green mt-2 max-w-fit">Submit</button>
			</Form>

			{/**ADD Category Modal */}
			{visibLeModal && (
				<CategoryModal type="post" setVisibLeModal={setVisibLeModal} />
			)}
		</div>
	)
}

export default TransactiomForm
