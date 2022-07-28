import React, {createContext, useState, useEffect} from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

export default function  CartContext({ children }) {

    const [productosCart, setProductosCart] = useState([]);
    const [totalProductosCart, setTotalProductosCart] = useState(0);
    const [montoTotalCart, setMontoTotalCart] = useState(0);

    useEffect(() => {
        countItems();
        montoTotalItems();
    },[productosCart])

    function addItem (item, quantity) {
        if(isInCart(item.id)){
            const newCart = productosCart.map(producto => {
                if (producto.id === item.id) {
                    return {...producto, qty: producto.qty+quantity};
                }
                return producto;
            });
            setProductosCart(newCart);
        }
        else {
            const newItem = {...item, qty: quantity};
            setProductosCart(productosCart => [...productosCart,newItem]);
        }
    };

    function removeItem (itemId) {
        const newCart = productosCart.filter((producto) => producto.id !== itemId)
        setProductosCart(newCart);
    };

    function clearCart () {
        setProductosCart([]);
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
        setTotalProductosCart(cantidadItems);
    };

    function montoTotalItems () {
        let montoTotal = 0;
        productosCart.forEach((producto) => {
            montoTotal = montoTotal + (producto.qty * producto.price);
        })
        setMontoTotalCart(montoTotal);
    };

    
    return (
        <Provider value={{productosCart, addItem, removeItem, clearCart, totalProductosCart, montoTotalCart}}>
            {children}
        </Provider>       
        );
}