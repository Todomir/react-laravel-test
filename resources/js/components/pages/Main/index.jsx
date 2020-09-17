import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "../../index.css";

function Main() {
    const history = useHistory();

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios
            .get("/api/todos")
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleClick = () => {
        history.push("/final");
    };

    return (
        <main className="container">
            <h1 className="container__title">To-do App</h1>
            <p className="container__subtitle">These are your to-dos:</p>
            <section className="todo-container">
                {todos && todos.length > 0 ? (
                    todos.map(todo => (
                        <div className="todo-item" key={todo.id}>
                            <h3 className="todo-item__title">{todo.title}</h3>
                            <p className="todo-item__description">
                                {todo.description}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Nobody home! Maybe create a new to-do.</p>
                )}
            </section>
            <button onClick={handleClick} className="container__button">
                + New to-do
            </button>
        </main>
    );
}

export default Main;
