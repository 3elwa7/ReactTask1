import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import GetProduts from "./GetProducts"
import React, { Fragment } from "react";
import bootstrap from 'bootstrap'
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

const NavBar =props=>{
    
    return(
        <React.Fragment>
           <div>
               <GetProduts/>
               <br></br>
               <AddProduct />
           </div>
          </React.Fragment>
    );
};

export default NavBar;
//   return(
//       <React.Fragment>
//   <div>
//       <GetProduts/>
//       <br></br>
//       <AddProduct />
//   </div>
//   </React.Fragment>