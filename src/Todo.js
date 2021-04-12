import { useState } from 'react';
import './Todo.css';

const Todo = ({ id, item, editTodo, removeTodo }) => {
	const [ editItem, setEditItem ] = useState(item);
	const [ isEditing, setIsEditing ] = useState(false);

	const toggleEdit = () => {
		setIsEditing(edit => !edit);
	};

	const handleChange = e => {
		setEditItem(e.target.value);
	};

	const handleUpdate = e => {
		e.preventDefault();
		editTodo(id, editItem);
		setIsEditing(false);
	};

	if (!isEditing) {
		return (
			<div className="Todo">
				<span className="Todo-item">{item}</span>
				<button className="Todo-edit_button" onClick={toggleEdit}>
					edit
				</button>
				<button className="Todo-remove_button" onClick={removeTodo}>
					&times;
				</button>
			</div>
		);
	}
	else {
		return (
			<div className="Todo">
				<form onSubmit={handleUpdate}>
					<input className="Todo-input" type="text" placeholder={item} value={editItem} onChange={handleChange} />
					<button className="Todo-update_button">update</button>
				</form>
			</div>
		);
	}
};

export default Todo;
