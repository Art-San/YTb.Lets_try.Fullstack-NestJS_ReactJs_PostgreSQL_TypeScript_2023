import React, { FC } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader } from '../types/types'

const TransactionTable: FC = () => {
	const { transactions } = useLoaderData() as IResponseTransactionLoader
	console.log('transactions', transactions)
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
							{/*  */}
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<th>Аренда</th>
							<th>146</th>
							<th>аренда</th>
							<th>22.07.23</th>
							<th>
								{/* FaTrash */}
								<button className="btn hover:btn-red ml-auto">
									<FaTrash />
								</button>
							</th>
						</tr>
						{/* {settlements.map((settlement) => (
                        <tr key={settlement._id}>
                            <td>{settlement.name}</td>
                            {carKeys.map((carKey) => (
                                <td key={carKey}>
                                    {cars[carKey].priceKm * settlement.km}
                                </td>
                            ))}
                        </tr>
                    ))} */}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default TransactionTable
