import React from 'react'
import Navbar from '../Navbar/Navbar';
import { BsFillCartCheckFill ,BsFillSuitHeartFill } from 'react-icons/bs';
import { useContext, useEffect } from "react";
import  axios from "axios";
import CardVertical from '../Cards/CardVertical';
import { CartContext } from '../Context/CartContext';
import { WishListContext} from '../Context/WishlistContext';
import {CartPrice} from '../CartPrice';

function Cartpage() {
    
  const { cart, setCart, addToCart, changeCartQty, removeFromCart } = useContext(CartContext);
  const { addToWishList,setwishList } = useContext(WishListContext);
  
  useEffect(() => {
      (async () => {
          const response = await axios({
              method: "get",
              url: "/api/user/cart",
              headers: { authorization: localStorage.getItem('token') },
          
          });
          if (response.status === 200) {
              console.log("cartdetails", response.data.cart);
              setCart(response.data.cart);
          }
      })();
  }, []);

  const price = cart.reduce((acc, curr) => acc = acc + curr.qty * curr.price.original, 0);
  const discountedPrice = cart.reduce((acc, curr) => acc = acc + Number(curr.price.original) - Number(curr.price.discounted), 0);
  
  const quantity = cart.reduce((acc, curr) => acc = acc + curr.qty, 0);
  const totalPrice = price - Number(discountedPrice) + 199;
  
  return (
    <>
    <Navbar />
    <h3 className="cart-heading-my-cart" style={{ color: "white", fontSize: "3rem", marginTop: "4rem" }}>My<span style={{ color: "#f5ac2c" }}>-Cart</span> </h3>
    <div className="cartpage-grid-view">
    <div className=" cart-page-container-md">
    <section className="cart-section-cart-view">
        <div className="cart-section-card">
            
                {cart.map(item => (< CardVertical product={item} removeFromCart={() =>removeFromCart(item._id,setCart) }
                    addToWishList={() => addToWishList (item , setwishList) } />))}
            

        </div>    
    </section>
    
    </div>
    {
            cart.length === 0 ?  <h3 className="cart-heading" style={{ color: "white", fontSize: "4rem" }}>Your cart is<span style={{ color: "#f5ac2c", alignItems: "center" }}>-Empty -- </span> <  BsFillCartCheckFill/></h3>: <CartPrice qty={quantity} price={price} discountPrice={discountedPrice} totalPrice={totalPrice}/>
            
        }
    </div>
       
     
    
    
    </>
  )
}

export default Cartpage