import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/**
 * @typedef { import("./index").Color } Color
 * @typedef { import("./index").Base } Base
 * @typedef { import("./index").MoveCard } MoveCard
 * @typedef { import("./index").Position } Position
 * @typedef { import("./index").Shielded } Shielded
 * @typedef { import("./index").Boostable } Boostable
 * @typedef { import("./index").Segment } Segment
 * @typedef { import("./index").Body } Body
 * @typedef { import("./index").Shell } Shell
 * @typedef { import("./index").World } World
 */

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
