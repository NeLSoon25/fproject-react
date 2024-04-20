import React, { useState } from 'react';
import './ToDo.css'; // Importa el archivo de estilos para el TodoList
import { BsBackspace } from "react-icons/bs";

function TodoList({ category }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false, category: category }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filtra las tareas según la categoría seleccionada
  const filteredTodos = category === 'All' ? todos : todos.filter(todo => todo.category === category);

  return (
    <div className="TodoList-container">
      <input type="text" value={newTodo} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <button className='add_btn' onClick={addTodo}>Add Task</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className='btn_del' onClick={() => deleteTodo(todo.id)}><BsBackspace size={20}/></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
