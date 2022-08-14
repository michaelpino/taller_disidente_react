import CartWidget from './CartWidget';
import logo from '../img/logo.jpg';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {db} from "../firebase/firebase";
import { getDocs, collection} from "firebase/firestore";


export default function NavBar() {
    
    const [categorias, setCategorias ] = useState([]);

    useEffect(() => {
        const solicitudFirebase = collection(db,"productos");    
        getDocs(solicitudFirebase).then(respuesta => {
            const listaCategoriasFirebase = respuesta.docs.map(doc => {
                return doc.data().category;
            })
            const listaCategoriasUnicas = [...new Set(listaCategoriasFirebase)];    //Con esto filtro las categorias repetidas en el listado
            setCategorias(listaCategoriasUnicas);
        })
        },[])
    
    return (
    <nav className="flex justify-around items-center"> 
        <div className='inline-flex items-center'>
            <Link to="/"><img className="max-h-20 " src={logo} /></Link>
            <div className="block">
                <h1 className="text-3xl font-medium"> Disidente Taller</h1>
                <h3 className='italic'>Moto & Auto Workshop </h3>
            </div>
        </div>
        
        <div>
            
            <ul className="justify-around inline-flex list-none font-medium text-decoration-style: solid">
                {categorias.map( (categoria, i) => <li key={i} className="box-border p-2 hover:font-bold hover:text-sky-500"><Link to={`category/${categoria}`} >{categoria}</Link></li>)}
                <li className="box-border p-2 text-orange-500 hover:font-bold hover:text-sky-500"><Link to={`Orders`} >Orders</Link></li>
                <li><CartWidget /></li>
            </ul>
        </div>
    </nav>
    );
  }