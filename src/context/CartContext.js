import React, {createContext, useState} from "react";

export const contexto = createContext();
const { Provider } = contexto;

export default function  CartContext({ children }) {

    const [productosCart, setProductosCart] = useState([]);

    function addItem (item, quantity) {
        if(isInCart(item.id)){
            const newCart = productosCart.map(producto => {
                if (producto.id === item.id) {
                    return {...producto, qty: producto.qty+quantity};
                }
                return producto;
            });
            console.log("El nuevo carrito es:");
            console.log(newCart);
            setProductosCart(newCart);
        }
        else {
            const newItem = {...item, qty: quantity};
            setProductosCart(productosCart => [...productosCart,newItem]);
        }
        
        
        
        console.log(productosCart);
    };

    function removeItem (itemId) {
        const newCart = productosCart.filter((producto) => producto.id !== itemId)
        console.log(newCart);
        console.log("id=" + itemId + " fue borrado");
    };

    function clear () {
        setProductosCart([]);
        console.log("borrado todo");
    };

    function isInCart (id) {
        let respuesta = false;
        productosCart.forEach((producto) => {
            if(producto.id === id){
                respuesta = true;
            }
        })
        return respuesta;
    };

    
    return (
        <Provider value={{productosCart, addItem, removeItem, clear}}>
            {children}
        </Provider>       
        );
}