import React, { FC } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
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
	)
}

export default TableBody
