import { Link } from "react-router-dom";

export default function ItemDetail({ id, title, price, pictureUrl, description, category }) {
    return (
            <div key={id} className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-blue-600 text-xl font-medium tracking-widest">{category}</span>
                <Link to={`/item/${id}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img className="rounded-t-lg" src={pictureUrl} alt={title}/>
                </Link>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                  <p className="text-gray-700 text-base mb-4">
                    {description}
                  </p>
                  <label htmlFor="sizes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Talla:</label>
                  <select id="sizes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-l leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">${price} USD</button>
                </div>
              </div>
            </div>
    );
}