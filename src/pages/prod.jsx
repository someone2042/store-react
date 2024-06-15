import React, { useContext } from "react";
import { shopcontext } from "./shop-contex";
import { MdAddShoppingCart } from "react-icons/md";
export const Prod = (props) => {
    const { id, pname, price, photo, info } = props.data;
    const { addToCart, cartitem } = useContext(shopcontext);
    const n = cartitem[id];
    return (
        <div className="prod">
            <div className="img">
                <img src={photo} />
            </div>
            <div className="info">
                <div className="upper_info">
                    <p className="name">{pname} </p>
                    <p className="price"> ${price} </p>
                </div>
                <div className="down_info">
                    <p className="info_text">{info}</p>
                    <button onClick={() => addToCart(id)} className="add"> <MdAddShoppingCart size={30} />{n > 0 && <> ({n}) </>} </button>
                </div>
            </div>
        </div>
    )
}