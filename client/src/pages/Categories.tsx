import { FC, useState } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { Form } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import CategoryModal from '../components/CategoryModal'
import { instance } from '../api/axios.api'

export const categoriesAction = async ({ request }: any) => {
	switch (request.method) {
		case 'POST': {
			const formData = await request.formData()
			const title = {
				title: formData.get('title'),
			}
			await instance.post('/categories', title)
			return null
		}
		case 'PATCH': {
			return null
		}
		case 'DELETE': {
			return null
		}
	}
}

const Categories: FC = () => {
	const [visibLeModal, setVisibLeModal] = useState<boolean>(false)
	return (
		<>
			<div className=" mt-10 rounded-md bg-slate-800 p-4">
				<h1>You category list</h1>
				{/*Category list */}
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
				{/* Add Category */}
				<button
					onClick={() => setVisibLeModal(!visibLeModal)}
					className="mt-5 flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
				>
					<FaPlus />
					<span>Create a new category</span>
				</button>
			</div>
			{/**ADD Category Modal */}
			{visibLeModal && (
				<CategoryModal type="post" id={1} setVisibLeModal={setVisibLeModal} />
			)}
			{/**Edit Category Modal */}
		</>
	)
}

export default Categories
