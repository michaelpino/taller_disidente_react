import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import SyncLoader  from "react-spinners/SyncLoader";
import {db} from "../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function ItemDetailContainer( ) {
    
    const {id} = useParams();
    const [producto, setProducto ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const querySinFiltrar = collection(db,"productos");
        const solicitudFirebase = doc(querySinFiltrar, id);
        getDoc(solicitudFirebase).then(respuesta => {
            const productoFirebase = {
                ...respuesta.data(),
                id: respuesta.id
            }
            setProducto(productoFirebase);
            setLoading(false);
            console.log(productoFirebase);
            }
        )
        
        //SECCION QUE OBTIENE DATOS DE PRODUCTOS DESDE UNA APIWEB. NO LA BORRO PARA USARLA A FUTURO
        // setLoading(true);
        // setTimeout( () => {
        //     fetch(`https://fakestoreapi.com/products/${id}`)
        //     .then(res=>res.json())
        //     .then(data=> setProducto(data))
        //     .finally(() => setLoading(false))
        // },2000);
        
    },[])
    
    return (
        <div className="grid justify-center">
            {loading ? <SyncLoader color={"#2cbbe8"} loading={loading} cssOverride={override} size={80} /> : <ItemDetail producto={producto}/> }
        </div>
    );
}