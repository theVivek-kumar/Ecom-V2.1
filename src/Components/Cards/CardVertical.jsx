import React from 'react';
import { BsFillCartCheckFill ,BsFillSuitHeartFill } from 'react-icons/bs';
function CardVertical({ product,addToCart,addToWishList}) {
   const {title, desc, rating, instock,  price:{original, discount, discounted}, categoryName , img} = product;
   console.log(title, desc)

   return (

      <div class="w-80 bg-white rounded-lg border border-gray-00 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
         <a href="#">
            <img class="rounded-t-lg object-contain h-64 w-80 ..." src={img} alt="" />
           
         </a>
         <div class="p-5">

            <a href="#">
               <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a> 
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
            
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{original}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-red-500">discount-:{discount}</p>
            <div class="mb-3 font-normal text-gray-700 dark:text-green-500">discounted Price-{discounted}</div>
            
            <div class="flex items-center justify-between">
               <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               <a> <BsFillSuitHeartFill/></a>

            </div>
           
            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Add to Cart
               <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
         </div>
      </div>

   )
}

export default CardVertical