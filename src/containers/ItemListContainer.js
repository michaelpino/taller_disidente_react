import React, { useState, useEffect } from "react";
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import {db} from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function ItemListContainer( {} ) {
    
    const {categoryName} = useParams();
    
    const [productos, setProductos ] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        setLoading(true);
        const querySinFiltrar = collection(db,"productos");
        const solicitudFirebase = categoryName ? query(querySinFiltrar, where("category","==",categoryName)) : querySinFiltrar ;
        getDocs(solicitudFirebase).then(respuesta => {
            const listaProductosFirebase = respuesta.docs.map(doc => {
                return {...doc.data(), id:doc.id}
            })
            setProductos(listaProductosFirebase);
            setLoading(false);
        });        
    },[categoryName])
    
    return (
        <div>
            {loading ? <HashLoader color={"#2cbbe8"} loading={loading} cssOverride={override} size={150} /> : <ItemList productos={productos}/>}
        </div>
    );
}