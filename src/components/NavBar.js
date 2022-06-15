import logo from '../img/logo.jpg';
import cart from '../img/shopping-cart.png';

export default function NavBar() {
    return (
    <navbar className="flex justify-around items-center"> 
        <div className='inline-flex items-center'>
            <img className="max-h-20 " src={logo} />
            <div className="block">
                <h1 className="text-3xl font-medium"> Disidente Taller</h1>
                <h3 className='italic'>Moto & Auto Workshop </h3>
            </div>
        </div>
        
        <div>
            <ul className="justify-around inline-flex list-none font-medium text-decoration-style: solid">
                <li className="box-border p-2 hover:font-bold hover:text-sky-500"><a href="http://www.google.cl" >Inicio</a></li>
                <li className="box-border p-2 hover:font-bold hover:text-sky-500"><a href="http://www.google.cl" >Nosotros</a></li>
                <li className="box-border p-2 hover:font-bold hover:text-sky-500"><a href="http://www.google.cl" >Tienda en linea</a></li>
                <li className="box-border p-2 hover:font-bold hover:text-sky-500"><a href="http://www.google.cl" >Contáctanos</a></li>
                <li className="box-border p-2 hover:font-bold"><a href="http://www.google.cl" ><img className="max-h-8 hover:scale-125 " src={cart}/></a></li>
            </ul>
        </div>
    </navbar>
    );
  }