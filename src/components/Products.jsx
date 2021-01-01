import React from "react";
import {Link, Switch, Route} from "react-router-dom";
import {products} from "../data/products";
import ProductsDetail from "./ProductsDetail";

function Products(props) {

const productsMap = products.map(item => (
  <li>
  <Link to={`/products/${item._id}`}>
  {item.title}
  </Link>
  </li>
));

  return(
    <div className="card" >

  <div className="card-body">
    <h5 className="card-title">Products</h5>
    <hr />
    {productsMap}
    <Switch>
    <Route path="/products/:productID/">
    <ProductsDetail />
    </ Route>
    </Switch> 
  </div>
</div>
  )
}
export default Products;