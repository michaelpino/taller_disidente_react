import cart from '../img/shopping-cart.png';
import { Link } from "react-router-dom";

export default function CartWidget() {
    return (
        <div className="hover:scale-125  p-2">
            <Link className='inline-flex self-center hover:text-sky-500' to="/cart" ><img className="max-h-8" src={cart}/> 4 </Link>
        </div>
    );
}

