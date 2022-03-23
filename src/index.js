import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import  "./index.css";
import Navbar from "./Component/navbar";
//import Product from "./Products";
import App from "./App";
import AddProducts from "./Component/AddProduct";
import EditProduct from "./Component/EditProduct";

ReactDOM.render(<Navbar />, document.querySelector("#root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
