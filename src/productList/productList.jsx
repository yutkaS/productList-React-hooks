import React from "../../node_modules/react";
import { createProductList } from  './creacteProductList';
const products = createProductList(20)


export const ProductList = (props) =>{
    const productList = products.map((element)=>(
        <li onClick={()=>{props.addToCartFunction(element)}}>{element}</li>
    ))
    return productList
}