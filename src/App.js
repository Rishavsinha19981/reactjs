import "./app.css";
import { Topbar } from "./Components/Topbar/Topbar.jsx";
import { Sidebar } from "./Components/sidebar/Sidebar.jsx";
import Home from "./pages/home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import{User} from "./pages/users/User";
import { NewUser } from "./pages/newusers/NewUser";
import {ProductList} from "./pages/productlist/ProductList"
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route  path="/newuser">
            <NewUser/>
          </Route>
          <Route  path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route  path="/newproduct">
            <NewProduct/>
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
