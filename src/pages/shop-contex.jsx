import React, { createContext, useState } from "react";
import { PROD } from "../list";

export const shopcontext = createContext(null);



export const ShopContextProvider = (props) => {
    const [cartitem, setCarItems] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });

    const addToCart = (pid) => {
        setCarItems((prev) => ({ ...prev, [pid]: prev[pid] + 1 }));
    };
    const getTotal = () => {
        let total = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                let k = PROD.find((product) => product.id === Number(item));
                total += cartitem[item] * k.price;
            }
        }
        return total;
    }

    const removFormCart = (pid) => {
        setCarItems((prev) => ({ ...prev, [pid]: prev[pid] - 1 }));
    };
    const contextValue = { cartitem, addToCart, removFormCart, getTotal };

    return <shopcontext.Provider value={contextValue}> {props.children} </shopcontext.Provider>
};
