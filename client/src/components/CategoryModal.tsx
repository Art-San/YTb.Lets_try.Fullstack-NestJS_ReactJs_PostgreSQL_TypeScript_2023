import { FC } from 'react'
import { Form } from 'react-router-dom'

interface ICategoryModal {
	type: 'post' | 'patch'
	id?: number // id? означает не обязательным
	setVisibLeModal: (visible: boolean) => void // функция которая ни чего не возвращает но принимант параметр visible
}

const CategoryModal: FC<ICategoryModal> = ({ type, id, setVisibLeModal }) => {
	return (
		<div className=" fixed bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black/50">
			<Form
				action="/categories"
				className=" grid w-[300px] gap-2 rounded-md bg-slate-900 p-5"
				method={type}
				onSubmit={() => {
					setVisibLeModal(false)
				}}
			>
				<label htmlFor="title">
					<small>Categori title</small>
					<input
						className=" input w-full"
						type={'text'}
						name="title"
						placeholder="Title.."
					/>
					<input type="hidden" name="id" value={id} />
				</label>

				<div className=" flex items-center gap-2">
					<button className="btn btn-green" type="submit">
						{type === 'patch' ? 'Save' : 'Create'}
					</button>
					<button
						onClick={() => setVisibLeModal(false)}
						className="btn btn-red"
					>
						Close
					</button>
				</div>
			</Form>
		</div>
	)
}

export default CategoryModal
