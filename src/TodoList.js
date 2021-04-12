import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
	const INITIAL_STATE = [
		{ id: uuid(), item: 'Feed the cats.' },
		{ id: uuid(), item: 'Scoop the litter.' },
		{ id: uuid(), item: 'Refresh the water bowl.' }
	];

	const [ todos, setTodos ] = useState(INITIAL_STATE);
  
	const addTodo = newTodo => {
    setTodos(todos => [ ...todos, { ...newTodo, id: uuid() } ]);
	};
  
	const editTodo = (id, updatedItem) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, item: updatedItem } : todo)));
	};
  
	const removeTodo = id => {
    setTodos(todos.filter(t => t['id'] !== id));
	};

  const todoComponents = todos.map(({ id, item }) => (
    <Todo id={id} key={id} item={item} editTodo={editTodo} removeTodo={() => removeTodo(id)} />
  ));

	return (
		<div className="TodoList">
			<NewTodoForm addTodo={addTodo} />
			<div className="TodoList-list">
				<h3 className="TodoList-header">To-do List</h3>
				{todoComponents}
			</div>
		</div>
	);
};

export default TodoList;
