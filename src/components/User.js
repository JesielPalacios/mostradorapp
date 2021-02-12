import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const User = () => {
    const {id} = useParams();

    const [usuariosArr, setusuariosArr] = useState([]);

    useEffect(() => {
        const llamaDatos = async() => {
            const data = await fetch(`http://localhost:3001/api/user/${id}`)
            const usuario = await data.json()
            setusuariosArr(usuario);
        }
        
        llamaDatos()
    }, [id])

    return (
        <div className="container mt-5">
                <div>
                    <div className="card text-dark bg-light mb-3">
                        <div className="card-header">ID: {usuariosArr.id}</div>
                        <div className="card-body">
                            <h5 className="card-title">{usuariosArr.name}</h5>
                            <p className="card-text">
                                Salario: {usuariosArr.salary}
                            </p>
                        </div>
                        <Link to="/usuarios" className="btn btn-outline-danger">Regresar</Link>
                    </div>
                </div>
        </div>
    )
}