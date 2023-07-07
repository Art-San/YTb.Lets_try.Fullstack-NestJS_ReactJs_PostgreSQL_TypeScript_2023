import React, { FC } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import { formatFoUSD } from '../../../helpers/currency.helper'
import { formatDate } from '../../../helpers/date.helper'
import { IResponseTransactionLoader } from '../../../types/types'

const TableBody: FC = () => {
	const { transactions } = useLoaderData() as IResponseTransactionLoader
	return (
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
						<th>{el.category.title}</th>
						<th>{formatDate(el.createdAt)}</th>
						<th>
							<button className="btn hover:btn-red ml-auto">
								<FaTrash />
							</button>
						</th>
					</tr>
				))
			) : (
				<p>нет транзакций</p>
			)}
		</tbody>
	)
}

export default TableBody
