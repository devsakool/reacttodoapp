import React from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  }
  return (
    <>
      <h1 className="text-center">REACT TODO APP</h1>
      <div className="Todo-container">
        <div className="input-container">
          <input type="text" placeholder="Enter your todos here..." className="input-field" value={inputValue} onChange={handleInputChange} />
          <button type="submit" className="submit-btn" onClick={handleAddTodo}>ADD +</button>
        </div>
        <div className="list-container">
          <ul>
            <li>
              <div className="checkbox-filed">
                <input type="checkbox" />
                <span>first todo</span>
              </div>
              <div className="delete-btn">
                <button>Delete</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="clear-btn">
          <button className="clear-all-btn">CLEAR ALL</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
