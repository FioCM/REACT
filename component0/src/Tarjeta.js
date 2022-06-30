import React from "react";


function Tarjeta({descripcion,nombreTarjeta,precio}){

    let edad = 29

    return (
        <div>
            <h1>Información Recibida {nombreTarjeta}</h1>
            <p>Descripción de la Tarjeta {descripcion}</p>
            <p>Edad:{edad}</p> {/*Así es como se llaman las variables, y asi se hace un comentario */}
            <p>El precio es {precio}</p>
        </div>
    )
}

export default Tarjeta