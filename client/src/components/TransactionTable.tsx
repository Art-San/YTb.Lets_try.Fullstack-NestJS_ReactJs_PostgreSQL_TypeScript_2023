import React, { FC } from 'react'

const TransactionTable: FC = () => {
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
				</table>
			</div>
		</>
	)
}

export default TransactionTable
