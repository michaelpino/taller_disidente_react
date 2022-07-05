export default function Item({ id, title, price, pictureUrl }) {
    return (
        <div key={id} className="group relative">
              <div className="w-80 min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={pictureUrl}
                  alt={title}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={pictureUrl}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {title}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">${price} CLP</p>
              </div>
            </div>
    );
}