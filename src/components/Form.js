import React from "react";
import { useForm } from "react-hook-form";

export default function Form({obtenerDatosComprador, finalizarCompra}) {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = data => {
    obtenerDatosComprador(data);
    finalizarCompra();
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-4 text-l font-bold">Para continuar, por favor ingrese sus datos:</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="nombre">
            Nombre y Apellido
        </label>
        <input type="text" id="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Juan Perez" required {...register("name")} />
      </div>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="tel">
            Teléfono Celular
        </label>
      <input type="text" id="tel" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="+56912345678" required {...register("phone")} />
      </div>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
            E-mail
        </label>
      <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="name@company.com" required {...register("email")} />
      </div>
      <div className="mb-4 grid justify-items-center">
      <input type="submit" className="inline-block px-6 py-2 border-2 border-blue-600 text-black-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"/>
      </div>
      
    </form>
  );
}