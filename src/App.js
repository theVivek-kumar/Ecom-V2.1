import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Landingpage from './Pages/Landingpage';
import ProductPage from './Pages/ProductPage';
import WishlistPage from './Pages/WishlistPage';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={< Landingpage />} />
     <Route path="/product" element = {<ProductPage/>}/>
     {/* <Route path="/Wishlist" element = {<WishlistPage/>}/> */}

     </Routes>
    </div>
  );
}

export default App;
