import { useState } from 'react';
import './NewTodoForm.css'

const NewTodoForm = ({ addTodo }) => {
	const INITIAL_STATE = {
		item : ''
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(formData => ({
			...formData,
			[name] : value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		addTodo({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form className="NewTodoForm" onSubmit={handleSubmit}>
			<label className="NewTodoForm-label" htmlFor="item">New To-do Item:</label>
			<input
        className="NewTodoForm-input"
				id="item"
				type="text"
				name="item"
				placeholder="so much to do... so little time..."
				value={formData.item}
				onChange={handleChange}
			/>
			<button className="NewTodoForm-add_button">Add To-do Item</button>
		</form>
	);
};

export default NewTodoForm;
