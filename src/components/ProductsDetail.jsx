import React from "react";
import {useParams} from "react-router-dom";
import {products} from "../data/products";

function ProductsDetail(props) {
const {productID} = useParams();

const product = products.filter(item => item._id === Number(productID));

return (
  <div className="mt-5">
  <h1 class="mb-5">Ürün Detayı</h1>
  <h2>{product[0].title}</h2>
  <p>{product[0].detail}</p>
    <p>{product[0].price}</p>
  <img src ={product[0].imgURL} />
  </div>
);
}

export default ProductsDetail;