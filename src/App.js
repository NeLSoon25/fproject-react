import React, { useState } from 'react';
import './App.css';
import { RiAccountCircleFill, RiBookReadFill } from "react-icons/ri";
import TodoList from './ToDo.js'; // Importa el componente TodoList

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('General'); // Inicialmente muestra todas las tareas

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  

  return (
    <div className={`app-container ${showSidebar ? '' : 'hide-sidebar'}`}>
      <div className="top-bar">
        <div className="sidebar-icon" onClick={toggleSidebar}>
          <RiBookReadFill size={35} />
        </div>
        <h1>To Do - LB1</h1>
        <div className="login-icon">
          <RiAccountCircleFill size={35}/>
        </div>
      </div>

      <div className="main-content">
        <div className="sidebar">
          <p id='changetext'>Category:</p>
          <select onChange={handleCategoryChange} value={selectedCategory}>
            <option value="General">General</option>
            <option value="Homework">Homework</option>
            <option value="Shop List">Shop List</option>
          </select>
        </div>

        <div className="schedule-container">
          <div className="white-rectangle">
            {/* Pasa la categoría seleccionada como prop al componente TodoList */}
            <TodoList category={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
