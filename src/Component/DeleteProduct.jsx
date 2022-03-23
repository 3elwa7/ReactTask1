import { render } from "@testing-library/react";
import axios from "axios";
import React, {Component,useState} from "react";
const baseURL = "https://iti-react-cource.herokuapp.com/products";
const  Products = props=>{
const [post, setPost] = React.useState([]);
const id = props.id;
React.useEffect(() => {
  axios.get(`https://iti-react-cource.herokuapp.com/products/${id}`).then((response) => {
    setPost(response.data);
  });
}, []);
const deletePost = () => {
  axios
    .delete(`https://iti-react-cource.herokuapp.com/products/${id}`)
    .then(() => {
      alert("Post deleted!");
      setPost(null)
    });

}

return (
  <div>
    {/* <h1>{post.name}</h1>
    <p>{post.price}</p>
    <p>{post.count}</p>

    <p>{post.id}</p> */}
    <button onClick={()=>deletePost()}>Delete Product
    
    </button>

  </div>
);

}
export default Products;