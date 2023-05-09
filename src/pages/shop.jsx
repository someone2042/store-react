import React from "react";
import { PROD } from "../list";
import { Prod } from "./prod";
export const Shop =()=>{
    return (
        <div className="under" >
            {PROD.map((product) => (
                <Prod data={product} />
            ))}
        </div>
    )
};