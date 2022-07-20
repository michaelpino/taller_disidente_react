import React, {useContext} from "react";
import {cartContext} from "../context/CartContext"; 

export default function Cart() {
    
    const {productosCart, totalProductosCart} = useContext(cartContext);
    
    return (
        <div>
            <t1 className="text-2xl text-justify text-blue-600">Carrito de compras</t1>
           {totalProductosCart == 0 ? <h2> No hay productos en el carrito </h2> : 
           
           <table className="min-w-full text-center">
            
                <thead className="border-b bg-gray-800">
                    <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">#</th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">Producto</th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">Precio (USD)</th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">Cantidad</th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">¿Eliminar?</th>
                    </tr>
                </thead>
                <tbody>
                {productosCart.map( (producto, index) => 
                    <tr className="bg-white border-b" key={producto.id}>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{index+1}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.title}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.price}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.qty}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Eliminar</button></td>
                        
                    </tr>)}
                </tbody>
            </table>       
            }
        </div>
    );
}