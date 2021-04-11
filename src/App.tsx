import './App.css';
import { ProductList } from './components/productdetails';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import { AddProduct } from "./components/addproduct";
import { Products } from "./components/productslist";
function App() {
  return (
    <div className="container">
      <div className="row">
        <Router>
          <div className="container col-12">
            <ul className="row list-unstyled">
              <li className="px-3">
                <Link to="/login">Login</Link>
              </li>
              <li className="px-3">
                <Link to="/register">Login</Link>
              </li>
              <li className="px-3">
                <Link to="/addproduct">Login</Link>
              </li>
              <li className="px-3">
                <Link to="/productslist">Login</Link>
              </li>
              <li className="px-3">
                <Link to="/productdetails">Login</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            <Route path="/register" exact={true}>
              <Register />
            </Route>
            <Route path="/addproduct" exact={true}>
              <AddProduct />
            </Route>
            <Route path="/productslist" exact={true}>
              <Products />
            </Route>
            <Route path="/productdetails" exact={true}>
              <ProductList />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
