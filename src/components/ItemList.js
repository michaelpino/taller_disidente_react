import Item from './Item';

export default function ItemList({ productos }) {
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
            {productos.map( (producto) => <Item id={producto.id} title={producto.title} price={producto.price} pictureUrl={producto.image}/>)}
        </div>
    );
}