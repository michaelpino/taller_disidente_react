import React, {createContext, useState} from "react";

export const contexto = createContext();
const { Provider } = contexto;

export default function  CartContext({ children }) {

    const [productosCart, setProductosCart] = useState([]);

    function addItem (item, quantity) {
        // if (!productosCart.lenth){
        //     const newItem = {...item, qty: quantity};
        //     setProductosCart([newItem]);
        //     console.log("agregado desde vacio");
        // }
        // else if (productosCart.lenth > 0){
        //     const newItem = {...item, qty: quantity};
        //     setProductosCart([...productosCart,newItem]);
        //     console.log("agregado desde con elementos");
        // }
        console.log(isInCart(item.id));
        if (isInCart(item.id)) {
            const cantidadEnCarrito = qtyProducto(item.id);
            removeItem(item.id)
            const cantidadSumada = quantity+cantidadEnCarrito;
            const newItem = {...item, qty: cantidadSumada};
            setProductosCart([...productosCart,newItem]);
        }
        else {
            const newItem = {...item, qty: quantity};
            setProductosCart([...productosCart,newItem]);
        }
        // else {
        //     productosCart.forEach((producto) => {
        //         if(producto.id == item.id){
        //             console.log("ya estaba agregado");
        //             setProductosCart(producto.qty += quantity);
        //         }
        //     })
        //}
        
        
        // const newItem = {...item, qty: quantity};
        // setProductosCart([...productosCart,newItem]);
        console.log(productosCart);
    };

    function removeItem (itemId) {
        // const nuevoCart = productosCart.filter((producto) => producto.id != itemId)
        // console.log(nuevoCart);
        setProductosCart(productosCart.filter((producto) => producto.id !== itemId));
        console.log("id=" + itemId + " fue borrado");
    };

    function clear () {
        setProductosCart([]);
        console.log("borrado todo");
    };

    function isInCart (id) {
        //console.log("esta o no");
        let respuesta = false;
        productosCart.forEach((producto) => {
            if(producto.id === id){
                console.log("ya estaba agregado");
                respuesta = true;
            }
        })
        return respuesta;
    };

    function qtyProducto (id) {
        productosCart.forEach((producto) => {
            if (producto.id === id) {
                return producto.qty;
            }
        })
    };
    
    return (
        <Provider value={{productosCart, addItem, removeItem, clear}}>
            {children}
        </Provider>       
        );
}