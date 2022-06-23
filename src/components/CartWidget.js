import cart from '../img/shopping-cart.png';

export default function CartWidget() {
    return (
        <div className="hover:scale-125  p-2">
            <a className='inline-flex self-center hover:text-sky-500' href="http://www.google.cl" ><img className="max-h-8" src={cart}/> 4 </a>
        </div>
    );
}

