import React, { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function ItemListContainer( {mensaje} ) {
    
    const {categoryName} = useParams();
    
    const [productos, setProductos ] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        setLoading(true);
        const url = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : 'https://fakestoreapi.com/products';
        setTimeout( () => {
            fetch(url)
            .then(res=>res.json())
            .then(data=> setProductos(data))
            .finally(() => setLoading(false))
        },2000);
    },[categoryName])
    
    return (
        <div>
            {loading ? <HashLoader color={"#2cbbe8"} loading={loading} cssOverride={override} size={150} /> : <ItemList productos={productos}/>}
        </div>
    );
}