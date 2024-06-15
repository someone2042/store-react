
import './App.css';
import { Navbar } from "./compon/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Shop } from "./pages/shop";
import { ShopContextProvider } from './pages/shop-contex';
function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>


  );
}
export default App;
