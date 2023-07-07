import { FC, useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'
import { Form, useLoaderData } from 'react-router-dom'
import { instance } from '../../../api/axios.api'
import { formatFoUSD } from '../../../helpers/currency.helper'
import { formatDate } from '../../../helpers/date.helper'
import { IResponseTransactionLoader, ITransaction } from '../../../types/types'

interface ITransactionTabel {
	limit: number
}

const TransactionTable: FC<ITransactionTabel> = ({ limit = 1 }) => {
	const { transactions } = useLoaderData() as IResponseTransactionLoader

	const [data, setData] = useState<ITransaction[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(0)

	const fetchTransactions = async (page: number) => {
		const response = await instance.get(
			`/transactions/pagination?page=${page}&limit=${limit}`
		)
		setData(response.data)
		setTotalPages(Math.ceil(transactions.length / limit))
	}

	const handlePageChange = (selectedItem: { selected: number }) => {
		setCurrentPage(selectedItem.selected + 1)
	}

	useEffect(() => {
		fetchTransactions(currentPage)
	}, [currentPage, transactions])

	return (
		<>
			<ReactPaginate
				className="mt-4 flex items-center justify-end gap-3 "
				activeClassName="bg-blue-600 rounded-sm"
				pageLinkClassName=" text-white text-xs py-1 px-2 rounded-sm"
				previousClassName="text-white py-1 px-2 bg-slate-800 rounded-sm text-xs"
				nextClassName="text-white py-1 px-2 bg-slate-800 rounded-sm text-xs"
				disabledClassName="text-white/50 cursor-not-allowed"
				disabledLinkClassName="text-slate-600 cursor-not-allowed"
				pageCount={totalPages}
				pageRangeDisplayed={1}
				marginPagesDisplayed={2}
				onPageChange={handlePageChange}
			/>
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
						{data ? (
							data?.map((el, i) => (
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
