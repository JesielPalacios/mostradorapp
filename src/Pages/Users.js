import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
    const [usuariosArr, setusuariosArr] = useState([]);

    useEffect(() => {
        const llamaDatos = async() => {
            const data = await fetch("http://localhost:3001/api/users/")
            const usuarios = await data.json();
            setusuariosArr(usuarios);
        }
        llamaDatos()
    }, [])

    const eliminarUsuario = (id) => {
        fetch(`http://localhost:3001/api/users/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => console.log(data))
    }

    return (
        <div className="container mt-5">
            <h1>Usuarios</h1>
            <h4>
                A continuación una lista de todos los usuarios.
                <Link
                    to="/agregar-usuario"
                    className="button muted-button btn btn-outline-primary btn-block"
                >
                    Agregar usuario
                </Link>
            </h4>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Salario</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuariosArr.length > 0 ?
                        usuariosArr.map(usuario => (
                            <tr key={usuario.id}>
                                <td> { usuario.id } </td>
                                <td>
                                    <Link to={`/usuario/${usuario.id}`}>
                                        { usuario.name }
                                    </Link>
                                </td>
                                <td>
                                    { usuario.salary }
                                </td>
                                <td>
                                    <Link
                                        to={`/editar/${usuario.id}`}
                                        className="button muted-button btn btn-outline-success btn-block"
                                    >
                                        Editar
                                    </Link>{' '}
                                    <a
                                        href='/usuarios'
                                        className="button muted-button btn btn-outline-danger btn-block"
                                        onClick={() => {eliminarUsuario(usuario.id) }}
                                    >
                                        Eliminar
                                    </a>
                                </td>
                            </tr>
                        )): (
                            <tr>
                                <td colSpan={3}>No hay usuarios</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}