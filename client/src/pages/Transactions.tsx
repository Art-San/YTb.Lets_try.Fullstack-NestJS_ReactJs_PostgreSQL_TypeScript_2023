import { FC } from 'react'

const Transactions: FC = () => {
	return (
		<>
			<div className="mt-4 grid grid-cols-3 items-start gap-4">
				{/*Add Transactiom form */}
				<div className="col-span-2 grid">Add Transactiom form</div>
				{/*Statistic blocks */}
				<div className="rounded-md bg-slate-800 p-3">
					<div className="grid grid-cols-2 gap-3">
						<div>
							<p className=" text-md text-center font-bold uppercase">
								Total Incom:
							</p>
							<p className=" mt-2 rounded-sm bg-green-600 p-1 text-center">
								1800$
							</p>
						</div>
						<div>
							<p className=" text-md text-center font-bold uppercase">
								Total Expens:
							</p>
							<p className=" mt-2 rounded-sm bg-red-600 p-1 text-center">
								1800$
							</p>
						</div>
					</div>
					<div className="">Chart</div>
				</div>
			</div>
			{/*Transactions Table */}
			<div className="mx-6 my-5">Table</div>
		</>
	)
}

export default Transactions
