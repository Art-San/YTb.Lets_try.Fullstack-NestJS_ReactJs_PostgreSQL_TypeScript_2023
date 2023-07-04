import { FC } from 'react'

import TableBody from './TableBody'
import TableHeader from './TableHeader'

const TransactionTable: FC = () => {
	return (
		<>
			<div className=" mt-4 rounded-md bg-slate-800 px-4  py-3">
				<table className=" w-full">
					<TableHeader />
					<TableBody />
				</table>
			</div>
		</>
	)
}

export default TransactionTable

// import React, { FC } from 'react'
// import { FaTrash } from 'react-icons/fa'
// import { useLoaderData } from 'react-router-dom'
// import { IResponseTransactionLoader } from '../types/types'

// const TransactionTable: FC = () => {
// 	const { transactions } = useLoaderData() as IResponseTransactionLoader

// 	return (
// 		<>
// 			<div className=" mt-4 rounded-md bg-slate-800 px-4  py-3">
// 				<table className=" w-full">
// 					<thead>
// 						<tr>
// 							<th className="font-bold"> № </th>
// 							<th className="font-bold">Title</th>
// 							<th className="font-bold">Amount</th>
// 							<th className="font-bold">Category</th>
// 							<th className="font-bold">Date</th>
// 							<th className=" text-right">Action</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{transactions ? (
// 							transactions.map((el, i) => (
// 								<tr key={i}>
// 									<th>{el.id}</th>
// 									<th>{el.title}</th>
// 									<th>{el.amount}</th>
// 									<th>{el.category.title}</th>
// 									<th>{el.createdAt}</th>
// 									<th>
// 										<button className="btn hover:btn-red ml-auto">
// 											<FaTrash />
// 										</button>
// 									</th>
// 								</tr>
// 							))
// 						) : (
// 							<p>нет транзакций</p>
// 						)}
// 					</tbody>
// 				</table>
// 			</div>
// 		</>
// 	)
// }

// export default TransactionTable
