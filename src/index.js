import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css"
import "bulma/css/bulma.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
