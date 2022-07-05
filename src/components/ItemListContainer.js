import ItemCount from './ItemCount';
import React, { useState, useEffect } from "react";
import ItemList from './ItemList';
import HashLoader from "react-spinners/HashLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function ItemListContainer( {mensaje} ) {
    
    const [productos, setProductos ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout( () => {
            fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(data=> setProductos(data))
            .finally(() => setLoading(!loading))
        },2000);
    },[])
    
    const onAdd = ( unidadesAlCarrito ) => {
        console.log("Se han agregado " + unidadesAlCarrito + " unidades del producto al carrito!");
    };
    
    return (
        <div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <HashLoader color={"#2cbbe8"} loading={loading} cssOverride={override} size={150} />
            <ItemList productos={productos}/>
        </div>
    );
}