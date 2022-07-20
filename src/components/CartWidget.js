import cart from '../img/shopping-cart.png';
import { Link } from "react-router-dom";
import React, {useContext} from "react";
import {cartContext} from "../context/CartContext"; 


export default function CartWidget() {
    
    const {totalProductosCart} = useContext(cartContext);
    
    return (
        <div className="hover:scale-125  p-2">
            {totalProductosCart === 0 ? <Link className='inline-flex self-center hover:text-sky-500' to="/cart" ><img className="max-h-8" src={cart}/></Link> : 
            <Link className='inline-flex self-center hover:text-sky-500' to="/cart" ><img className="max-h-8" src={cart}/> {totalProductosCart} </Link>}
        </div>
    );
}

