import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Bubble from "./Bubble";

const root = ReactDOM.createRoot(document.getElementById("root"));
const particleroot = ReactDOM.createRoot(document.getElementById("particle"));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

particleroot.render(
	<React.StrictMode>
		<Bubble />
	</React.StrictMode>
);