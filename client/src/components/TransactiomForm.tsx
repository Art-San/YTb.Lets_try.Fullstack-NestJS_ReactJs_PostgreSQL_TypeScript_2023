import React, { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form } from 'react-router-dom'

const TransactiomForm: FC = () => {
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
				<label htmlFor="category" className=" grid">
					<span>Category</span>
					<select className="input border-slate-700 " name="category" required>
						<option value="1" className=" bg-slate-700 ">
							Salary
						</option>
						<option value="2" className=" bg-slate-700 ">
							Gift
						</option>
						<option value="3" className=" bg-slate-700 ">
							Grocery
						</option>
					</select>
				</label>

				{/*ADD Category */}
				<button
					// onClick={() => setVisibLeModal(true)}
					className="mt-5 flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
				>
					<FaPlus />
					<span>Manage Catigories</span>
				</button>

				{/*Radio Buttons */}
				<div className="flex items-center gap-4">
					<label className="flex cursor-pointer items-center gap-2">
						<input
							type="radio"
							name="type"
							value={'income'}
							className="form-radio text-green-600"
						/>
						<span>Income</span>
					</label>
					<label className="flex cursor-pointer items-center gap-2">
						<input
							type="radio"
							name="type"
							value={'expens'}
							className="form-radio text-red-600"
						/>
						<span>Expens</span>
					</label>
				</div>

				{/*Submit button */}

				<button className=" btn btn-green mt-2 max-w-fit">Submit</button>
			</Form>
		</div>
	)
}

export default TransactiomForm
