import { useState } from 'react';

const EditTodoForm = ({ id, item, editTodo }) => {
	const [ formData, setFormData ] = useState({ id, item });

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(formData => ({
			...formData,
			[name] : value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		editTodo({ ...formData });
		setFormData({ id: '', item: '' });
	};

	return (
		<form className="EditTodoForm" onSubmit={handleSubmit}>
			<label className="EditTodoForm-label" htmlFor="item">
				Edit To-do Item:
			</label>
			<input
				className="EditTodoForm-input"
				id="item"
				type="text"
				name="item"
				placeholder={formData.item}
				value={formData.item}
				onChange={handleChange}
			/>
			<button className="EditTodoForm-add_button">Edit To-do Item</button>
		</form>
	);
};

export default EditTodoForm;
