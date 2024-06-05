import React, {useState, useEffect} from 'react';
import "./Todo.css";

function Todo() {
    const [todos,
        setTodos] = useState([]);
    const [filter,
        setFilter] = useState('pending');
    const [user,
        setUser] = useState();
    const token = localStorage.getItem("token");
    const [todoData,
        setToDoData] = useState({content: 'this is my content'});

    useEffect(() => {
        if (token) 
            fetchUser();
        }
    , [token]);

    useEffect(() => {
        if (user) 
            fetchTodos();
        }
    , [user, todoData]);

    const fetchUser = async() => {
        try {
            const response = await fetch("http://localhost:3000/api/user", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setUser(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchTodos = async() => {
        const url = `http://localhost:3000/todo/get?userId=${user
            ._id}&todo=${JSON
            .stringify(todoData)}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setTodos(data);
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const addTodo = async() => {
        const url = `http://localhost:3000/todo/add`;
        const requestBody = {
            userId: user._id,
            todo: todoData
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const updatedTodos = await response.json();
            setTodos(updatedTodos);
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setToDoData({
            ...todoData,
            [name]: value
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && todoData.content.trim() !== '') {
            addTodo();
            setToDoData({
                ...todoData,
                content: ''
            });
        }
    };

    const handleAddClick = () => {
        if (todoData.content.trim() !== '') {
            addTodo();
            setToDoData({
                ...todoData,
                content: ''
            });
        }
    };

    const handleFilterClick = (status) => {
        setFilter(status);
    };

    const handleDeleteAll = async() => {
        const url = `http://localhost:3000/todo/delete`;
        const requestBody = {
            userId: user._id
        };

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const updatedTodos = await response.json();
            setTodos(updatedTodos); // Update your state or handle the updated todos list as needed
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const updateTodoStatus = async(todoId, newStatus) => {
        const url = `http://localhost:3000/todo/change/${todoId}`;
        const requestBody = {
            userId: user._id,
            status: newStatus
        };

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const updatedTodos = await response.json();
            setTodos(updatedTodos); // Update your state or handle the updated todos list as needed
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const showTodos = () => {
      let filteredTodos = todos;
      if (filter === 'completed') {
        filteredTodos = todos.filter(todo => todo.status === 'Complete');
      } else if (filter === 'pending') {
        filteredTodos = todos.filter(todo => todo.status === 'Incomplete');
      }
      return filteredTodos.map(todo => (
        <div className="todo" key={todo._id}>
          <p>{todo.content}</p>
          <div 
            className={`filter ${filter === 'completed'
            ? 'active'
            : ''}`}
            onClick={() => updateTodoStatus(todo._id, todo.status === 'Complete' ? 'Incomplete' : 'Complete')}
          >
            {todo.status === 'Complete' ? 'Mark as Incomplete' : 'Mark as Complete'}
          </div>
        </div>
      ));
    };

    return (
        <div>
            <h1 className='aj' id='ajou'>
                Todo List
            </h1>
            <div className='input-container'>
                <input
                    className="todo-input"
                    placeholder="Add a new task..."
                    value={todoData.content}
                    onChange={handleInputChange}
                    name="content"/>
                <button className="add-button" onClick={handleAddClick}>
                    <img src='icons8-plus-48 (1).png' alt="Add"/>
                </button>
            </div>
            <div className="filters">
                <div
                    className={`filter ${filter === 'completed'
                    ? 'active'
                    : ''}`}
                    onClick={() => handleFilterClick('completed')}
                    data-filter="completed">
                    Complete
                </div>
                <div
                    className={`filter ${filter === 'pending'
                    ? 'active'
                    : ''}`}
                    onClick={() => handleFilterClick('pending')}
                    data-filter="pending">
                    Incomplete
                </div>
                <div className="delete-all" onClick={handleDeleteAll}>
                    Delete All
                </div>
            </div>

            <ul className="todos">
              {showTodos()}
            </ul>

            <div className="todos-container">
                {todos.length === 0 && (<img className="empty-image" src="empty.svg" alt="Empty list"/>)}
            </div>
        </div>
    );
}

export default Todo;
