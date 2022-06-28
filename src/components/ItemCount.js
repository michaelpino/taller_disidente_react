//import cart from '../img/shopping-cart.png';
import React, { useState } from "react";

export default function  ItemCount({ stock, initial, onAdd }) {
    
    const [contador, setContador ] = useState(initial);
    
    const sumarUnidad = () =>{
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restarUnidad = () =>{
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const agregarCarrito = (unidades) => {
        onAdd(unidades);
    };

    
    
    return (
        <div className="box-flex justify-items-center">
            <div className="inline-flex box-border p-3 border-3">
                <button onClick={restarUnidad} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                -
                </button>
                <p className="text-xl box-border p-3 border-3"> {contador} </p>
                <button onClick={sumarUnidad} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    +
                </button>
            </div>
            <div className="box-border p-3 border-3">
                <button onClick={() => {agregarCarrito(contador);}}  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

