import axios from "axios";
import GetProduct from "./GetProducts";
import React, {Component,useState,userContext} from "react";
import { render } from "@testing-library/react";
const baseURL = "https://iti-react-cource.herokuapp.com/products";
const Products = props =>{
 const id=props.id; 
const [post, setPost] = React.useState({
  name:"",
  price:"",
  count:""
});
React.useEffect(() => {
  axios.get(`https://iti-react-cource.herokuapp.com/products/${id}`).then((response) => {
    setPost(response.data);
  });
}, []);
const handleInputChange = e => {
const newpost={...post}
newpost[e.target.id]=e.target.value
setPost(newpost)
console.log(newpost)
};
const EditProduct=(e)=> {
  e.preventDefault();
  axios
    .put(`https://iti-react-cource.herokuapp.com/products/${id}`, {
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

      <table className="table">
       
        <tbody>
        <input onChange={(e)=>handleInputChange(e)} id="name" value={post.name}></input> 
        <input onChange={(e)=>handleInputChange(e)} id="price" value={post.price}></input> 
        <input onChange={(e)=>handleInputChange(e)} id="count" value={post.count}></input> 
          
        </tbody>
      </table>

    <button onClick={EditProduct}>Edit Product</button>

   

  </div>
);
}
export default Products;
{/* <form onSubmit={(e)=>EditProduct(e)} > */}

 {/* <label for="name" className="form-label">Update Product Name: </label>
     <input onChange={(e)=>handleInputChange(e)} id="name" value={post.name}></input> <br></br>
     <label for="price" className="form-label">Update Product Price: </label>
     <input onChange={(e)=>handleInputChange(e)} id="price" value={post.price}></input> <br></br>
     <label for="count" className="form-label">Updtae Product count: </label>
     <input onChange={(e)=>handleInputChange(e)} id="count" value={post.count}></input> 
    </form> */}