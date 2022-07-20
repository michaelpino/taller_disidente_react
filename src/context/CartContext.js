import React, {createContext, useState, useEffect} from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

export default function  CartContext({ children }) {

    const [productosCart, setProductosCart] = useState([]);
    const [totalProductosCart, setTotalProductosCart] = useState(0);

    useEffect(() => {
        countItems();
    },[productosCart])

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

    function countItems () {
        let cantidadItems = 0;
        productosCart.forEach((producto) => {
            cantidadItems += producto.qty;
        })
        console.log("El total de productos ahora es " + cantidadItems);
        setTotalProductosCart(cantidadItems);
    };

    
    return (
        <Provider value={{productosCart, addItem, removeItem, clear, totalProductosCart}}>
            {children}
        </Provider>       
        );
}