import ItemCount from './ItemCount';

export default function ItemListContainer( {mensaje} ) {
    
    const onAdd = ( unidadesAlCarrito ) => {
        console.log("Se han agregado " + unidadesAlCarrito + " unidades del producto al carrito!");
    };
    
    return (
        <div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
}