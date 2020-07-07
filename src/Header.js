import React from 'react';
import { ShapeHeader } from './Shapes';

export const Header = ({ addTodo, handleInputChange, value, todoList }) => {
  const trimmed = value.trim();
  const addNewTodo = (event) => {
    const code = event.keyCode;

    if (code === 13 && !todoList.includes(trimmed) && trimmed.length) {
      addTodo(true);
    }
  };

  return (
    (
      <header className="header">
        <h1>todos</h1>

        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyUp={addNewTodo}
          onChange={handleInputChange}
          value={value}
        />
      </header>
    )
  );
};

Header.propTypes = ShapeHeader.isRequired;
