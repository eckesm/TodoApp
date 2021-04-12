import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
	const INITIAL_STATE = [
		{ id: uuid(), item: 'Feed the cats.' },
		{ id: uuid(), item: 'Scoop the litter.' },
		{ id: uuid(), item: 'Refresh the water bowl.' }
	];

	const [ todos, setTodos ] = useState(INITIAL_STATE);

	const todoComponents = todos.map(({ id, item }) => (
		<Todo id={id} key={id} item={item} editTodo={() => editTodo(id, item)} removeTodo={() => removeTodo(id)} />
	));

	const addTodo = newTodo => {
		setTodos(todos => [ ...todos, { ...newTodo, id: uuid() } ]);
	};

	// const editTodo = ({id, item}) => {
	// 	let updatedTodos = [];
	// 	for (let t = 0; t < todos.length; t++) {
	// 		if (todos[t]['id'] === id) {
	// 			updatedTodos.push({ ...todos[t], todos[t]['item']:item });
	// 		}
	// 		else {
	// 			updatedTodos.push(t);
	// 		}
	// 	}
	// 	setTodos(updatedTodos);
	// };

	const removeTodo = id => {
		setTodos(todos.filter(t => t['id'] !== id));
	};

	return (
		<div className="TodoList">
			<NewTodoForm addTodo={addTodo} />
			<EditTodoForm />
			<div className="TodoList-list">
				<h3 className="TodoList-header">To-do List</h3>
				{todoComponents}
			</div>
		</div>
	);
};

export default TodoList;
