import React, { useContext } from "react";
import { shopcontext } from "./shop-contex";
export const Prod =(props) =>{
    const { id , pname, price , photo} = props.data;
    const { addToCart, cartitem} = useContext(shopcontext);
    const n = cartitem[id] ;
    return (
        <div className="prod">
            <div className="img">
            <img src={photo} />
            </div>
            <div className="info">
                <p className="name">{pname} </p>
                <p className="price"> ${price} </p>
                <button onClick={ () => addToCart(id)} className="add">Add to cart {n>0 && <> ({n}) </>} </button>
            </div>
        </div>
    )
}