import './App.css';
import React, { useState } from '../node_modules/react';
import { ProductList } from './productList/productList';
import { Cart } from './cart/cart';





function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev)=>{
        return [product, ...prev]
    })
  }

  const removeFromCart = (index) => {
    const newCart = cart;
    newCart.splice(index, 1);
    setCart(()=>[...newCart]);
  }

  return (
    <body>
    <ul><ProductList className={'productList'} addToCartFunction={addToCart}/></ul>
    <ul className={`cart`}><Cart cartProducts={cart} removeFromCartFunction={(e)=>removeFromCart(e)} /></ul>
    </body>
  );
}

export default App;
