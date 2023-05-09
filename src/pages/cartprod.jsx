import React, { useContext } from "react";
import { shopcontext } from "./shop-contex";

export const CartProd = ( props) => {

    const { id , pname, price , photo} = props.data;
    const { removFormCart, cartitem,addToCart} = useContext(shopcontext);
    const n = cartitem[id] ;

    return (
        <div className="prod">
            <div className="img">
            <img src={photo} />
            </div>
            <div className="info">
                <p className="name">{pname} </p>
                <p className="price"> ${price} </p>
                <button onClick={ () => removFormCart(id)} className=" delet ">Remove from cart </button>
                <button onClick={ () => addToCart(id)} className=" add "> Add </button>
                <h5>number you buy</h5>
                <h3>{n>0 && <> ({n}) </>} </h3>
            </div>
        </div>
    )
}