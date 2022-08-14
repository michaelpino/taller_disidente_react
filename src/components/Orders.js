import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {db} from "../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";
import SyncLoader  from "react-spinners/SyncLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function Orders() {
    
    const {register, handleSubmit } = useForm();
    const [solicitudIngresada, setSolicitudIngresada] = useState(false);
    const [idSolicitud, setIdSolicitud] = useState("");
    const [loading, setLoading] = useState(false);
    
    const onSubmit = data => {
        setErrorID(false);
        setIdSolicitud(data.ID);
      }

    const [formVisible, setFormVisible] = useState(false);
    const [productosOrden, setProductosOrden] = useState([]);
    const [montoOrden, setMontoOrden] = useState(0);
    const [errorID, setErrorID] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        if (idSolicitud !== ""){
            const querySinFiltrar = collection(db,"ventas");
            const solicitudFirebase = doc(querySinFiltrar, idSolicitud);
            getDoc(solicitudFirebase).then(respuesta => {
                setProductosOrden(respuesta.data().items);
                setMontoOrden(respuesta.data().total)
                setSolicitudIngresada(true);
            })
            .catch(setErrorID(true));  
        }
        setLoading(false);    
    },[idSolicitud])
    
    
    return (
        <div className="grid justify-items-center px-32 py-10">
           {!solicitudIngresada ? 
           <>
                <h1 className="text-2xl text-justify text-blue-600">Verificacion de ordenes de compra ingresadas</h1>
                <h2 className="py-10"> A continuación ingrese el ID de la orden de compra que requiere verificar: </h2> 
                <div className="mb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idSolicitud">
                        ID solicitud
                    </label>
                    <div className="flex py-3">
                        <input type="text" id="idSolicitud" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="a1b2c3d4e5f6g7h8i9" required {...register("ID")}/>
                        <input type="submit" className="inline-block px-6 py-2 border-2 border-blue-600 text-black-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"/>
                    </div>
                    {errorID ? <h3 className="text-xl text-justify text-red-600"> ID "{idSolicitud}" ingresada no se encuentra registrada. Verifique el ID y vuelva a intentarlo. </h3> : <></>}
                </form>
                </div>
                <Link to={"/"}><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Volver al inicio</button></Link>
                {loading ? <SyncLoader color={"#2cbbe8"} loading={loading} cssOverride={override} size={80} /> : <></>}
            </>
           :
           <>
                <h1 className="text-2xl text-justify text-blue-600">Resumen de la orden solicitada - ID "{idSolicitud}"</h1>
                <table className="min-w-full text-center py-4">
                
                    <thead className="border-b bg-gray-800">
                        <tr>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">#</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Producto</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Precio unitario (USD)</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Cantidad</th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Subtotal (USD)</th>
                        </tr>
                    </thead> 
                    <tbody>
                    {productosOrden.map( (producto, index) => 
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" key={producto.id}>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{index+1}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.title}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.price}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.qty}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{producto.price*producto.qty}</td>
                        </tr>)}
                        <tr className="bg-slate-200 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
                            <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap"> SUBTOTAL</td>
                            <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap"> {montoOrden} USD</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex py-10">
                    <div className="px-5">
                        <Link to={"/"}><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Volver al inicio</button></Link>
                    </div>
                </div>
            </>     
            }    
                
        </div>
    );
}