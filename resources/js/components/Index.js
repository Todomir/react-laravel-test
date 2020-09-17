import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

function Index() {
    return <Routes />;
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));
