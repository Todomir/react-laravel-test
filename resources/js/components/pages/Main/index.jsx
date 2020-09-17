import React from "react";
import { useHistory } from "react-router-dom";

import "../../index.css";

function Main() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/final");
    };

    return (
        <div className="container">
            <h1 className="container__title">Hello, world!</h1>
            <p className="container__subtitle">
                Programmed to work and not to feel.
            </p>
            <button onClick={handleClick} className="container__button">
                Not even sure that this is real :(
            </button>
        </div>
    );
}

export default Main;
