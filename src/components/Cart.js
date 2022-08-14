import React, {useContext, useState} from "react";
import {cartContext} from "../context/CartContext"; 
import Form from './Form';
import { Link } from "react-router-dom";
import {db} from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Cart() {
    
    const {productosCart, totalProductosCart, montoTotalCart, removeItem, clearCart} = useContext(cartContext);
    const [idVenta, setIdVenta] = useState();
    const [formVisible, setFormVisible] = useState(false);
    
    let datosComprador = {}
    
    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection,{
            buyer: datosComprador,
            items: productosCart,
            date: serverTimestamp(),
            total: montoTotalCart
        })
        .then( respuesta => {
            setIdVenta(respuesta.id);
            setFormVisible(false);
            clearCart();
        });
    }

    const cambiaVisibilidadForm = () =>{
        setFormVisible(!formVisible);
    }

    const obtenerDatosComprador = (datosObtenidos) => {
        datosComprador.name = datosObtenidos.name;
        datosComprador.phone = datosObtenidos.phone;
        datosComprador.email = datosObtenidos.email;
    }
    
    const cerrarCompra = () => {
        datosComprador = {};
        setIdVenta();
    }
    
    
    return (
        <div className="grid justify-items-center px-32 py-10">
           {idVenta ? 
           <></>
           :
           totalProductosCart == 0 ? 
           <>
                <h1 className="text-2xl text-justify text-blue-600">Carrito de compras</h1>
                <h2 className="py-10"> No hay productos en el carrito </h2> 
                <Link to={"/"}><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Volver al inicio</button></Link>
            </>
           :
           <>
                <h1 className="text-2xl text-justify text-blue-600">Carrito de compras</h1>
                <table className="min-w-full text-center py-4">
                
                    <thead className="border-b bg-gray-800">
                        <tr>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">#</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Producto</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Precio unitario (USD)</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Cantidad</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Subtotal (USD)</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4"></th>
                        </tr>
                    </thead> 
                    <tbody>
                    {productosCart.map( (producto, index) => 
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" key={producto.id}>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{index+1}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.title}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.price}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.qty}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.price*producto.qty}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><button onClick={() => {removeItem(producto.id);}} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Eliminar</button></td>
                        </tr>)}
                        <tr className="bg-slate-200 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
                            <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap"> SUBTOTAL</td>
                            <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap"> {montoTotalCart} USD</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex py-10">
                    <div className="px-5">
                        <button onClick={clearCart} className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Vaciar el carrito</button>
                    </div>
                    <div className="px-5">
                        <button onClick={cambiaVisibilidadForm} className="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Continuar con la compra</button>
                    </div>
                </div>
            </>     
            }    
                <div>
                        {formVisible ? <Form obtenerDatosComprador={obtenerDatosComprador} finalizarCompra={finalizarCompra}/> : <></>}

                </div>
                
                {idVenta ? 
                    <div className="grid justify-items-center ">
                        <h2 className="py-5 text-xl">{`Gracias por tu compra!`}</h2> 
                        <p className="py-1 text-xl text-blue-500">
                            {`Tu compra fue ingresada con el ID ${idVenta}`}
                        </p>
                        <div className="py-3">
                        <button onClick={cerrarCompra} className="inline-block px-6 py-2 border-2 border-blue-600 text-black-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Cerrar y volver al inicio</button>
                        </div>
                        
                    </div>
                    :
                    <></>
                }
        </div>
    );
}