import { FC } from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { instance } from '../api/axios.api'
import TransactionTable from '../components/common/transactiontable'
import TransactiomForm from '../components/TransactiomForm'
import {
	ICategory,
	IResponseTransactionLoader,
	ITransaction,
} from '../types/types'

export const transactionLoader = async () => {
	const categories = await instance.get<ICategory[]>('/categories')
	const transactions = await instance.get<ITransaction[]>('/transactions')
	const totalIncome = await instance.get<number>('/transactions/income/find')
	const totalExpense = await instance.get<number>('/transactions/expense/find')

	const data = {
		categories: categories.data,
		transactions: transactions.data,
		totalIncome: totalIncome.data,
		totalExpense: totalExpense.data,
	}
	return data
}

export const transactionAction = async ({ request }: any) => {
	switch (request.method) {
		case 'POST': {
			const formData = await request.formData()

			const newTransaction = {
				title: formData.get('title'),
				amount: +formData.get('amount'),
				category: formData.get('category'),
				type: formData.get('type'),
			}
			await instance.post('/transactions', newTransaction)
			toast.success('Транзакция добавлена')
			return null
		}
		case 'DELETE': {
			const formData = await request.formData()

			const transactionId = formData.get('id')
			await instance.delete(`/transactions/transaction/${transactionId}`)
			toast.success('Транзакция удалена')
			return null
		}
	}
}

const Transactions: FC = () => {
	const { totalIncome, totalExpense } =
		useLoaderData() as IResponseTransactionLoader
	return (
		<>
			<div className="mt-4 grid grid-cols-3 items-start gap-4">
				{/*Add Transactiom form */}
				<div className="col-span-2 grid">
					<TransactiomForm />
					<h1>фигня какаято</h1>
				</div>

				{/*Statistic blocks */}
				<div className="rounded-md bg-slate-800 p-3">
					<div className="grid grid-cols-2 gap-3">
						<div>
							<p className=" text-md text-center font-bold uppercase">
								Total Incom:
							</p>
							<p className=" mt-2 rounded-sm bg-green-600 p-1 text-center">
								{totalIncome}
							</p>
						</div>
						<div>
							<p className=" text-md text-center font-bold uppercase">
								Total Expens:
							</p>
							<p className=" mt-2 rounded-sm bg-red-600 p-1 text-center">
								{totalExpense}
							</p>
						</div>
					</div>
					<>Chart</>
				</div>
			</div>

			{/*Transactions Table */}
			<div className="my-5">
				<TransactionTable limit={3} />
			</div>
		</>
	)
}

export default Transactions
// 13-26-25
