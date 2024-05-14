import React, { useState } from "react";
import Header from "../code/Header";
import Footer from "../code/Footer";
import "../style/Productos.css";
import { datos } from "../../assets/datos";
import Swal from 'sweetalert2';

export default function Productos() {

    const [contadorCarrito, setContadorCarrito] = useState(0);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);   
    const [mostrarProducto, setMostrarProducto] = useState(false);
    const [carrito, setCarrito] = useState({});
    const [showConfirmation, setShowConfirmation] = useState({});
    const [filtroRemeras, setFiltroRemeras] = useState(false);
    const [filtroPantalones, setFiltroPantalones] = useState(false);
    const [filtroMedias, setFiltroMedias] = useState(false);
    const [filtroBuzos, setFiltroBuzos] = useState(false);
    const [filtroCamperas, setFiltroCamperas] = useState(true)
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);


    const toggleMostrarCarrito = () => {
        setMostrarCarrito(prevState => !prevState);
    };

    const toggleMostrarProducto = () =>  {
        setMostrarProducto(prevState => !prevState);
    };

    const handleMostrarProducto = (productoId) => {
        setProductoSeleccionado(productoId);
        setMostrarProducto(true);
        document.body.classList.add('modal-open');
    };

    const confirmarCompra = () => {
        setCarrito({});
        Swal.fire({
            title: "¡Gracias por su compra!",
            text: "Su pedido ha sido procesado con éxito.",
            icon: "success"
        });
    };


    const handleBuyClick = (productoId, productoNombre, productoPrecio, productoImgUrl) => {
        let newCarrito = { ...carrito };

        if (newCarrito[productoId]) {
            newCarrito[productoId].cantidad += 1;
        } else {
            newCarrito[productoId] = { nombre: productoNombre, cantidad: 1, precio: productoPrecio, img_url: productoImgUrl };
        }

        const precioUnitario = newCarrito[productoId].precio * newCarrito[productoId].cantidad;
        newCarrito[productoId].precioUnitario = precioUnitario;

        setShowConfirmation(prevState => ({
            ...prevState,
            [productoId]: true
        }));

        setContadorCarrito(prevContador => prevContador + 1);

        setCarrito(newCarrito);
    };

    const handleDeleteProduct = (productoId) => {
        let newCarrito = { ...carrito };

        if (newCarrito[productoId].cantidad > 1) {
            newCarrito[productoId].cantidad -= 1;
            newCarrito[productoId].precioUnitario = newCarrito[productoId].precio * newCarrito[productoId].cantidad;
        } else {
            delete newCarrito[productoId];
        }

        setShowConfirmation(prevState => {
            const newState = { ...prevState };
            delete newState[productoId];
            return newState;
        });

        setCarrito(newCarrito);
    };

    const calcularPrecioTotal = () => {
        let total = 0;

        for (let productoId in carrito) {
            total += carrito[productoId].cantidad * carrito[productoId].precio;
        }

        return total;
    };    

    const handleCloseModal = () => {
        setMostrarCarrito(false);
        setMostrarProducto(false);
        setProductoSeleccionado(null);
        document.body.classList.remove('modal-open');
    };

    {/*-------------------- FILTROS ------------------------*/ }
    const toggleFiltroCamperas = () => {
        setFiltroCamperas(!filtroCamperas);
    };
    const datosFiltradoos = filtroCamperas
        ? datos.filter((dato) => dato.tipo === 'camperas')
        : datos;


    const toggleFiltroBuzos = () => {
        setFiltroBuzos(!filtroBuzos);
    };
    const buzoFiltrados = filtroBuzos
        ? datos.filter((dato) => dato.tipo === 'Buzo')
        : datos;

    const toggleFiltroMedias = () => {
        setFiltroMedias(!filtroMedias);
    };
    const datosFiltradooss = filtroMedias
        ? datos.filter((dato) => dato.tipo === 'Medias')
        : datos;


    const toggleFiltroPantalones = () => {
        setFiltroPantalones(!filtroPantalones);
    };
    const datosFiltradoss = filtroPantalones
        ? datos.filter((dato) => dato.tipo === 'Pantalones')
        : datos;

    const toggleFiltroRemeras = () => {
        setFiltroRemeras(!filtroRemeras);
    };
    const datosFiltrados = filtroRemeras
        ? datos.filter((dato) => dato.tipo === 'Remera')
        : datos;

    {/*-------------------- FILTROS FIN ------------------------*/ }





    return (

        <div className="contenedor-prods">
            <Header />
            <div className="Carro">
                <button className='carro' onClick={toggleMostrarCarrito}>
                    <img src="./imagenes/carro.png" alt="carrito" width={70} />
                </button>
            </div>
            <h2 className="tit-cat">C A T A L O G O</h2>

            <div>

                {/* ------------- BOTONES FILTROS-------------------*/}

                <ul className="btn-filtross">
                    <button className="btn-filtro" onClick={toggleFiltroCamperas}>
                        {filtroCamperas ? 'Mostrar todos' : 'Catalogo'}
                    </button>

                    {/* Botón para activar/desactivar el filtro de buzos */}
                    <button className="btn-filtro" onClick={toggleFiltroBuzos}>
                        {filtroBuzos ? 'Mostrar todos' : 'Buzos'}
                    </button>

                    {/* Botón para activar/desactivar el filtro de remeras */}
                    <button className="btn-filtro" onClick={toggleFiltroRemeras}>
                        {filtroRemeras ? 'Mostrar todos' : 'Remeras'}
                    </button>

                    {/* Botón para activar/desactivar el filtro de pantalones */}
                    <button className="btn-filtro" onClick={toggleFiltroPantalones}>
                        {filtroPantalones ? 'Mostrar todos' : 'Pantalones'}
                    </button>

                    {/* Botón para activar/desactivar el filtro de medias */}
                    <button className="btn-filtro" onClick={toggleFiltroMedias}>
                        {filtroMedias ? 'Mostrar todos' : 'Medias'}
                    </button>
                </ul>

                {/* ------------- BOTONES FILTROS-------------------*/}


                {/* Renderizamos solo si está activo el filtro de remeras */}
                {filtroRemeras && datosFiltrados.length > 0 && (
                    <section className="contenedor-general">
                        {datosFiltrados.map((dat) => (
                            <button onClick={() => handleMostrarProducto(dat.id)} className="productos-btn">
                                <img className="img" src={dat.img_url} alt={dat.producto} />
                                <h1 className="titulo-producto">{dat.producto}</h1>
                                <p className="precio">${dat.precio}</p>
                            </button>
                        ))}
                    </section>
                )}

                {/* Renderizamos solo si está activo el filtro de camperas */}
                {filtroCamperas && datosFiltradoos.length > 0 && (
                    <section className="contenedor-general">
                        {datosFiltrados.map((dat) => (
                            <button key={dat.id} onClick={() => handleMostrarProducto(dat.id)} className="productos-btn">
                                <img className="img" src={dat.img_url} alt={dat.producto} />
                                <h1 className="titulo-producto">{dat.producto}</h1>
                                <p className="precio">${dat.precio}</p>
                            </button>
                        ))}
                    </section>
                )}

                {/* Renderizamos solo si está activo el filtro de pantalones */}
                {filtroPantalones && datosFiltradoss.length > 0 && (
                    <section className="contenedor-general">
                        {datosFiltradoss.map((dat) => (
                            <button key={dat.id} onClick={() => handleMostrarProducto(dat.id)} className="productos-btn">
                                <img className="img" src={dat.img_url} alt={dat.producto} />
                                <h1 className="titulo-producto">{dat.producto}</h1>
                                <p className="precio">${dat.precio}</p>
                            </button>
                        ))}
                    </section>
                )}

                {/* Renderizamos solo si está activo el filtro de buzos */}
                {filtroBuzos && buzoFiltrados.length > 0 && (
                    <section className="contenedor-general">
                        {buzoFiltrados.map((dat) => (
                            <button key={dat.id} onClick={() => handleMostrarProducto(dat.id)} className="productos-btn">
                                <img className="img" src={dat.img_url} alt={dat.producto} />
                                <h1 className="titulo-producto">{dat.producto}</h1>
                                <p className="precio">${dat.precio}</p>
                            </button>
                        ))}
                    </section>
                )}

                {/* Renderizamos solo si está activo el filtro de medias */}
                {filtroMedias && datosFiltradooss.length > 0 && (
                    <section className="contenedor-general">
                        {datosFiltradooss.map((dat) => (
                            <button key={dat.id} onClick={() => handleMostrarProducto(dat.id)} className="productos-btn">
                                <img className="img" src={dat.img_url} alt={dat.producto} />
                                <h1 className="titulo-producto">{dat.producto}</h1>
                                <p className="precio">${dat.precio}</p>
                            </button>
                        ))}
                    </section>
                )}


                {mostrarCarrito && (
                    <div className="modal" onClick={handleCloseModal}>
                        <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
                            <button className="cerrar-modal" onClick={handleCloseModal}>X</button>
                            <h1 className="tit-carrito">CARRITO</h1>
                            <ul className="prod">
                                {Object.entries(carrito).map(([id, { nombre, cantidad, precioUnitario, img_url }]) => (
                                    <li className="lista" key={id}>
                                        <img src={img_url} alt={nombre} className="producto-imagen" />
                                        {cantidad} {nombre}   ${precioUnitario}
                                        <button className="eliminar" onClick={() => handleDeleteProduct(id)}>
                                            <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path id="path" d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="final">
                                <p className="precio-final-txt-sub">Subtotal: ${calcularPrecioTotal()}</p>
                                <p className="precio-final-txt">Total: ${calcularPrecioTotal()}</p>
                                <button className="btn-carrito" onClick={confirmarCompra}>Confirmar compra</button>
                            </div>
                        </div>
                    </div>
                )}


                {mostrarProducto && productoSeleccionado !== null && (
                    <div className="modal-producto" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="cerrar-modal-prod" onClick={handleCloseModal}>
                                <img src="./imagenes/cruz.png" alt="" />
                            </button>
                            <h1 className="titulo-prod">{datos[productoSeleccionado - 1].producto}</h1>
                            <img src={datos[productoSeleccionado - 1].img_url} className="img-prod" alt="" />
                            <div className="txt">
                                <p className="txt-descr">{datos[productoSeleccionado - 1].descripcion}</p>
                                <p className="precio-prod">${datos[productoSeleccionado - 1].precio}</p>
                                <button className="boton agregar" onClick={() => handleBuyClick(productoSeleccionado, datos[productoSeleccionado - 1].producto, datos[productoSeleccionado - 1].precio, datos[productoSeleccionado - 1].img_url)}>
                                    Agregar al carrito    <img src="./imagenes/shop-add.png" alt="carrito" width={27} />
                                </button>
                                {showConfirmation[productoSeleccionado] && <p className="producto-carrito">¡Se agregó el producto al carrito!</p>}
                            </div>
                        </div>
                    </div>
                )}


            </div>


            <Footer />
        </div>

    )
}