import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import SyncLoader  from "react-spinners/SyncLoader";

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
        setTimeout( () => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=> setProducto(data))
            .finally(() => setLoading(false))
        },2000);
    },[])
    
    return (
        <div className="grid justify-center">
            {loading ? <SyncLoader color={"#2cbbe8"} loading={loading} cssOverride={override} size={80} /> : <ItemDetail id={producto.id} title={producto.title} price={producto.price} pictureUrl={producto.image} description={producto.description} category={producto.category}/> }
        </div>
    );
}