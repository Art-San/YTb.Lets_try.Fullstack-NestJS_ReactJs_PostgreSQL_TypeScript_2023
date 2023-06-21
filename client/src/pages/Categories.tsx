import { FC } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { Form } from 'react-router-dom'

const Categories: FC = () => {
	return (
		<div className=" mt-10 rounded-md bg-slate-800 p-4">
			<h1>You category list</h1>
			<div className="mt-2 flex flex-wrap items-center gap-2">
				<div className=" group relative flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2">
					Salry
					<div className=" absolute bottom-0 left-0 right-0 top-0 hidden items-center justify-between rounded-lg bg-black/90 px-3 group-hover:flex">
						<button>
							<AiFillEdit />
						</button>
						<Form className=" flex" method="delete" action="/categories">
							<input type="hidden" value={'Category ID'} />
							<button type="submit">
								<AiFillCloseCircle />
							</button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Categories
