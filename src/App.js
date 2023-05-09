import logo from './logo.svg';
import './App.css';
import {Navbar} from "./compon/navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Cart} from "./pages/cart"; 
import {Shop} from "./pages/shop"; 
import { ShopContextProvider } from './pages/shop-contex';
import { Accueil } from './pages/accueil';
function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/" element={<Accueil/>} />
          </Routes>
      </Router>
    </ShopContextProvider>


  );
}
export default App;
