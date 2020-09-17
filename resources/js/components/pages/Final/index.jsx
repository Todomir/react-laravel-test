import React from "react";
import { useHistory } from "react-router-dom";

function Final() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    };

    return (
        <div className="container container--dark">
            <h1 className="container__title container__title--dark">
                Hello, world.
            </h1>
            <p className="container__subtitle container__subtitle--dark">:D</p>

            <button
                onClick={handleClick}
                className="container__button container__button--dark"
            >
                Go back
            </button>
        </div>
    );
}

export default Final;
