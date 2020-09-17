import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Final() {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = e => {
        e.preventDefault();
        axios
            .post("/api/todos", { title, description })
            .then(response => {
                setTodos(response.data);
                history.push("/");
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container container--dark">
            <h1 className="container__title container__title--dark">
                Create a new to-do
            </h1>
            <form onSubmit={handleClick} className="todo-form">
                <div className="todo-form__input-block">
                    <label className="input-block__label" htmlFor="title">
                        Title *
                    </label>
                    <input
                        className="input-block__input"
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={event => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>
                <div className="todo-form__input-block">
                    <label className="input-block__label" htmlFor="description">
                        Description *
                    </label>
                    <textarea
                        className="input-block__input"
                        rows="5"
                        cols="33"
                        name="description"
                        id="description"
                        value={description}
                        onChange={event => {
                            setDescription(event.target.value);
                        }}
                    />
                </div>

                <button className="container__button container__button--dark">
                    Create new to-do
                </button>
            </form>
        </div>
    );
}

export default Final;
