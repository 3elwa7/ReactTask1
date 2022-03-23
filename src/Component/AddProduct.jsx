import axios from "axios";
import GetProduct from "./GetProducts";
import React, {Component,useState,userContext} from "react";
import {Link} from "react-router-dom";
const baseURL = "https://iti-react-cource.herokuapp.com/products";
const Products = props =>{
const name = props.name;
const price = props.price;
const count = props.count;

const [post, setPost] = React.useState({
  name:"",
  price:"",
  count:""
});
React.useEffect(() => {
  axios.get({baseURL}).then((response) => {
    setPost(response.data);
  });
}, []);
const handleInputChange = e => {
const newpost={...post}
newpost[e.target.id]=e.target.value
setPost(newpost)
console.log(newpost)
};
const AddProduct=(e)=> {
  e.preventDefault();
  axios
    .post(baseURL, {
      name:post.name,
      price:parseInt(post.price),
      count: parseInt(post.count)
    })
    .then((response) => {
      setPost(response.data);
    });
}

return (
  <div>
    <form onSubmit={(e)=>AddProduct(e)} >
    <label for="name" className="form-label">New Product Name: </label>
     <input onChange={(e)=>handleInputChange(e)} id="name" value={post.name}></input> <br></br>
     <label for="price" className="form-label">New Product Price: </label>
     <input onChange={(e)=>handleInputChange(e)} id="price" value={post.price}></input> <br></br>
     <label for="count" className="form-label">New Product count: </label>
     <input onChange={(e)=>handleInputChange(e)} id="count" value={post.count}></input> 
     <br></br>

    <button onClick={AddProduct}>Add Product</button>
    </form>

  </div>
);
}
export default Products;