import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export const Navbar =()=>{
    return(
        <div className="navbar">
            
            <Link to="/" >Accueil</Link>
            <Link to="/shop" >Shop</Link>
            <Link to="/cart">
                <ShoppingCart />
            </Link>
        </div>
    )
}