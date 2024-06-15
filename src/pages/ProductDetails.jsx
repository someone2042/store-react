import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { PROD } from "../list";
export const ProductDetails = (props) => {
    const { productId } = useParams();
    const product = PROD.find(product => product.id === parseInt(productId));
    return (
        <div>

        </div>
    )
}