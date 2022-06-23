
export default function ItemListContainer( {mensaje} ) {
    return (
        <div className=" font-medium">
            <p className=' hover:text-sky-500' > {mensaje} </p>
        </div>
    );
}