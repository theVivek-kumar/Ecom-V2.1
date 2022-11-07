import React from 'react'
import { v4 as uuid } from "uuid";
import CardVertical from '../Cards/CardVertical';
import { WishListContext } from '../Context/WishlistContext';
import { CartContext } from '../Context/CartContext';
import { ProductPageContext } from '../Context/ProductContext';
import { useState, useEffect, useContext } from "react";
import axios from 'axios';

function Products() {
  const { sort, setSort, rating, setRating, priceRange, setPriceRange, categoryName, setcategoryName } = useContext(ProductPageContext);
  const [key, setKey] = useState(0); 
  const [productListing, setProductListing] = useState([]);
  const { addToCart, cart } = useContext(CartContext);
  const { addToWishList, wishList ,setwishList} = useContext(WishListContext);
 

useEffect(() => {
    (async () => {
        const response = await axios.get(`api/products`);
        console.log(response.data);
        if (response.status === 200) {
            setProductListing(response.data.products);
        }
    })();
},[]);

  const products = [
    {
      _id: uuid(),
      qty:1,
      title: "IndoPrimo",
      desc: "Men's Checkered Slim fit Casual Shirt",
       rating: 2.7,
      inStock: true,
       price: {
        original: "1800",
        discount: "20%",
        discounted: "1500",
      },
       img: "https://m.media-amazon.com/images/I/61j0cpBJjJS._AC_UL480_FMwebp_QL65_.jpg",
      categoryName: "Shirt",
    },
    {
      _id: uuid(),
        qty:1,
      title: "Dennis Lingo",
      desc: "Men's Classic Collar Casual Shirt",
       rating: 3.4,
      inStock: true,
       price: {
        original: "3000",
        discount: "50%",
        discounted: "1500",
      },
       img: "https://m.media-amazon.com/images/I/618Wek95laS._AC_UL480_FMwebp_QL65_.jpg",
      categoryName: "Shirt",
    },
    {
      _id: uuid(),
        qty:1,
      title: "IndoPrimo",
      desc: "Men's Slim Fit Casual Shirt",
       rating: 5.0,
      inStock: true,
       price: {
        original: "2200",
        discount: "50%",
        discounted: "1100",
      },
       img: "https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
      categoryName: "denim",
    
    },
    {
      _id: uuid(),
        qty:1,
      title: "Amazon Brand - ",
      desc: "Men's Slim Fit Casual Shirt",
       rating: 4.0,
      inStock: true,
       price: {
        original: "1200",
        discount: "50%",
        discounted: "600",
      },
       img: "https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL480_FMwebp_QL65_.jpg",
      categoryName: "watch",
  
    },
    {
      _id: uuid(),
        qty:1,
      title: "IndoPrimo",
      desc: "Men's Slim Fit Casual Shirt",
       rating: 3.4,
      inStock: true,
       price: {
        original: "1000",
        discount: "50%",
        discounted: "500",
      },
       img: "https://m.media-amazon.com/images/I/61RqedeafJL._AC_UL480_FMwebp_QL65_.jpg",
      categoryName: "Shirt",
  
    },
    //  
    {
      _id: uuid(),
        qty:1,
      title: "IndoPrimo",
      desc: "Men's Slim Fit Casual Shirt",
       rating: 2.4,
      inStock: true,
       price: {
        original: "1200",
        discount: "20%",
        discounted: "2000",
      },
       img: "https://m.media-amazon.com/images/I/71cT6st-7hL._AC_UL480_FMwebp_QL65_.jpg",
      categoryName: "watch",
  
    },
    {
      _id: uuid(),
        qty:1,
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 2.4,
    inStock: true,
     price: {
      original: "1200",
      discount: "20%",
      discounted: "1000",
    },
     img: "https://m.media-amazon.com/images/I/71mNmVxJFHL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "hoodie",

  },
     {
       _id: uuid(),
         qty:1,
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 3.4,
    inStock: true,
     price: {
      original: "1200",
      discount: "20%",
      discounted: "500",
    },
     img: "https://m.media-amazon.com/images/I/71fUM-BIiaL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "hoodie",

  },
  
  ];
  
  return (
    <div>
        {/* <CardHVertical/> */}
        
        <section class="flex flex-wrap m-2">
                    
                      {
                        products.map (product=>(
                          <CardVertical key={product._id} product={product}
                          desc={products.desc} 
                          addToCart={() => addToCart(product, product._id)}
                          addToWishList={() => addToWishList (product,setwishList)}/>

                        ))
                      }
                       
             
        </section>
    </div>
  )
}

export default Products