import React from "react";
import { render } from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import "./index.css";
import App from "./App";

const root = document.getElementById("root");
render(<App/>, root)