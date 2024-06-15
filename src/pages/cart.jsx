import React, { useContext } from "react";
import { PROD } from "../list";
import { shopcontext } from "./shop-contex";
import { CartProd } from "./cartprod";

export const Cart = () => {
    const { cartitem, getTotal } = useContext(shopcontext)
    let n = getTotal()
    return (
        <div className="under">
            <div>{n}</div>
            {PROD.map((product) => {
                if (cartitem[product.id] !== 0) {
                    return < CartProd data={product} />
                }
            }
            )
            }
        </div>
    )
};