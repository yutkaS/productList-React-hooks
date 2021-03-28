import React from "../../node_modules/react";

export const Cart = (props) => {
    const cart = props.cartProducts.map((element, i) => (
        <li onClick={() => {props.removeFromCartFunction(i)}}>{element}</li>
    ))

    return cart

}