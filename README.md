# Disidente Taller - React

Este proyecto consta de un E-commerce elaborado para un taller y venta de accesorios de bicimotos de nombre "Disidente Taller". Cuenta con categorías de productos, detalle de cada producto, un carrito de compra, y los formularios para la captación de los datos del cliente, junto a la funcionalidad completa asociada a una venta. 

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías en su desarrollo:

### Frontend: [ReactJS] 6.14.15 + [TailwindCSS]
### Backend: NodeJS 14.18.0
### DB: Firebase Firestore Cloud
### Componentes de terceros en React: [react-spinners] - [react-hook-form]

## Caracteristicas

- Las secciones de productos en la barra de navegación se generan de forma dinámica de acuerdo a las secciones indicadas en los productos ingresados actualmente en la base de datos.
- Se utiliza un spinner para indicar al usuario que se esta recuperando desde el servidor la información de productos, el cual desaparece una vez se ha obtenido exitosamente la información.
- La seccion "Orders" permite revisar los productos de una orden de compra previa a partir de un ID válido de compra.
- La persistencia del carrito de compra se maneja en el _local storage_ del navegador.
- La cantidad de productos que un usuario puede agregar al carrito de compra dependen del stock del mismo, siendo personalidazo según el producto (componente ItemCount).

## Características futuras

- Sistema de calificación de 5 estrellas por producto (ahora solo despliega como _mock_)
- Opciones de colores, tamaños o versiones por producto (ahora solo despliega como _mock_)
- Obtener el stock de productos desde la base de datos (por ahora todos los productos tienen un _stock_ "base" de 5 unidades)


[react-spinners]: <https://www.davidhu.io/react-spinners/>
[TailwindCSS]: <https://tailwindcss.com/>
[ReactJS]: <https://es.reactjs.org/>
[react-hook-form]: <https://react-hook-form.com/>