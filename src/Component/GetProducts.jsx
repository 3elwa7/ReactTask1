import axios from "axios";
import React, {Component,useState} from "react";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import { ReactDOM } from "react";
const baseURL = "https://iti-react-cource.herokuapp.com/products";

export default function Products (){
const [post, setPost] = React.useState([]);
React.useEffect(() => {
  axios.get(baseURL).then((response) => {
    setPost(response.data);
  });
}, []);

return (
  <React.Fragment>
      <h1>Products</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th></th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
          {post.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>

              <td>
              <DeleteProduct 
                id = {product.id}/>
               </td>
               <td>
              <EditProduct 
                id = {product.id}/>
               </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>






);
}
