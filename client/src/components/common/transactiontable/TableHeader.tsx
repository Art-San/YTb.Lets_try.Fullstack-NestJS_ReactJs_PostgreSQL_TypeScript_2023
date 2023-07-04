import { FC } from 'react'

const TableHeader: FC = () => {
	return (
		<>
			<thead className=" text-blue-500">
				<tr>
					<th className="font-bold"> № </th>
					<th className="font-bold">Title</th>
					<th className="font-bold">Amount</th>
					<th className="font-bold">Category</th>
					<th className="font-bold">Date</th>
					<th className=" text-right">Action</th>
				</tr>
			</thead>
		</>
	)
}

export default TableHeader
