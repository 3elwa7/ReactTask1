// import React from "react";
// import NavBar from "./Component/navbar";
// import AddProduct from "./Component/AddProduct";
// import EditProduct from "./Component/EditProduct";
// import DeleteProduct from "./Component/DeleteProduct";
// import GetProduct from "./Component/GetProducts";
// import { Router, Switch, Route, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/Add">Add</Link>
//             </li>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/Add">
//             <AddProduct />
//           </Route>
//           <Route path="/">
//             <GetProduct />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
