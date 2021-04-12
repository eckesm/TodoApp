import './Todo.css';

const Todo = ({ id, item, editTodo, removeTodo }) => {
	return (
		<div className="Todo">
			<span className="Todo-item">{item}</span>
			{/* <button className="Todo-edit_button" onClick={editTodo}>
				edit
			</button> */}
			<button className="Todo-remove_button" onClick={removeTodo}>
				&times;
			</button>
		</div>
	);
};

export default Todo;
