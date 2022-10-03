import React from 'react'
import Asidebar from '../Components/Asidebar/Asidebar'
import Navbar from '../Components/Navbar/Navbar'
import Products from '../Components/Products/Products'

function ProductPage() {
  return (
    <div>
        <Navbar/>
        <div class='flex'>
            <Asidebar/>
            <Products/>
        </div>

    </div>
  )
}

export default ProductPage