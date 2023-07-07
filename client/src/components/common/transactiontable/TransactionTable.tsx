import { FC, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { formatFoUSD } from '../../../helpers/currency.helper'
import { formatDate } from '../../../helpers/date.helper'
import { IResponseTransactionLoader, ITransaction } from '../../../types/types'

interface ITransactionTabel {
	limit: number
}

const TransactionTable: FC = ({ limit = 3 }) => {
	const { transactions } = useLoaderData() as IResponseTransactionLoader

	const { data, setData } = useState<ITransaction[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(0)

	const fetchTransactions = async (page: number) => {
		// const // 1.11.00
	}

	return (
		<>
			<div className=" mt-4 rounded-md bg-slate-800 px-4  py-3">
				<table className=" w-full">
					<thead>
						<tr>
							<th className="font-bold"> № </th>
							<th className="font-bold">Title</th>
							<th className="font-bold">Amount</th>
							<th className="font-bold">Category</th>
							<th className="font-bold">Date</th>
							<th className=" text-right">Action</th>
						</tr>
					</thead>
					<tbody>
						{transactions ? (
							transactions.map((el, i) => (
								<tr key={i}>
									<th>{el.id}</th>
									<th>{el.title}</th>
									<th
										className={
											el.type === 'income' ? 'text-green-500' : 'text-red-500'
										}
									>
										{el.type === 'income'
											? `+ ${formatFoUSD.format(el.amount)}`
											: `- ${formatFoUSD.format(el.amount)}`}
									</th>
									<th // у категории (?) есть тайтел отобрази || или 'Other' />/ Исправ ошибку при удал категории
									>
										{el.category?.title || 'Other'}
									</th>
									<th>{formatDate(el.createdAt)}</th>
									<th>
										<Form method="delete" action="/transactions">
											<input type="hidden" name="id" value={el.id} />
											<button className="btn hover:btn-red ml-auto">
												<FaTrash />
											</button>
										</Form>
									</th>
								</tr>
							))
						) : (
							<p>нет транзакций</p>
						)}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default TransactionTable

// import { FC } from 'react'

// import TableBody from './TableBody'
// import TableHeader from './TableHeader'

// const TransactionTable: FC = () => {
// 	return (
// 		<>
// 			<div className=" mt-4 rounded-md bg-slate-800 px-4  py-3">
// 				<table className=" w-full">
// 					<TableHeader />
// 					<TableBody />
// 				</table>
// 			</div>
// 		</>
// 	)
// }

// export default TransactionTable
