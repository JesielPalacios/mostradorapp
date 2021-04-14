import React, { useState } from "react";
import { Form } from "./Form";

export const AddUser = () => {
    const [datos, setDatos] = useState({
        id: 0,
        name: '',
        salary: 0
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        console.log('enviando datos... ' + datos.id + ' ' + datos.name + ' ' + datos.salary);
        
        const enviaDatos = () => {
                fetch('http://localhost:3001/api/users', {
                method: 'POST',
                headers: {
                    // 'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos)
            })
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:',error))
        }

        enviaDatos()
    }

    return (
        <div className="container mt-5">
            <h1>Agregar un nuevo usuario</h1>
            <hr />
            <h4>
                A continuación ingrese los datos del nuevo usuario.
            </h4>
            <Form
                onSubmit={onSubmit}
                handleInputChange={handleInputChange}
            />
        </div>
    )
}