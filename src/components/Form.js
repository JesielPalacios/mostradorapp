import React from 'react'
import { Link } from 'react-router-dom'

export const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            {
                props.editing ?
                <div className="row">
                    <div className="col-md-8">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name" 
                            id="name"
                            onChange={props.handleInputChange}
                            className="form-control"
                            placeholder="Ingrese el nombre aquí"
                            value={props.usuario.name}
                            />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="salary">Salario</label>
                        <input
                            type="number"
                            name="salary" 
                            id="salary"
                            onChange={props.handleInputChange}
                            className="form-control"
                            placeholder="Ingrese el salario aquí"
                            value={props.usuario.salary}
                            />
                    </div>
                </div>
                :
                <div className="row">
                    <div className="col-md-8">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name" 
                            id="name"
                            onChange={props.handleInputChange}
                            className="form-control"
                            placeholder="Ingrese el nombre aquí"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="salary">Salario</label>
                        <input
                            type="number"
                            name="salary" 
                            id="salary"
                            onChange={props.handleInputChange}
                            className="form-control"
                            placeholder="Ingrese el salario aquí"
                        />
                    </div>
                </div>
            }
            <div className="col-md-3">
                <button
                    type="submit"
                    to="/usuarios"
                    className="button muted-button btn btn-outline-success btn-block"
                >
                    Guardar
                </button>{' '}
                <Link
                    to="/usuarios"
                    className="button muted-button btn btn-outline-danger btn-block"
                >
                    Cancelar
                </Link>
            </div>
        </form>
    )
}
