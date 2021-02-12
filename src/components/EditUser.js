import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Form } from "./Form";

export const EditUser = () => {
    const {id} = useParams();

    const [editing, setEditing] = useState(true)

    useEffect(() => {
        const llamaDatos = async() => {
            const data = await fetch(`http://localhost:3001/api/user/${id}`)
            const usuario = await data.json()
            setDatos({
                id: usuario.id, name: usuario.name, salary: usuario.salary
            });
        }
        
        llamaDatos()
    }, [id])

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

        const enviaDatos = (datos) => {
                fetch(`http://localhost:3001/api/user/${id}`, {
                method: 'PUT',
                body: datos
            }).then(res => res.json()).then(data => console.log(data))
        }

        enviaDatos(datos)
    }

    return (
        <div className="container mt-5">
            <h1>Editar usuario</h1>
            <hr />
            <h4>A continuación se encuentran los datos del usuario {id}</h4>
            <Form
                onSubmit={onSubmit}
                handleInputChange={handleInputChange}
                usuario={datos}
                editing={editing}
            />
        </div>
    )
}













// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import { Form } from "./Form";

// export const EditUser = () => {
    
//     const {id} = useParams();

//     const [usuario, setUsuario] = useState([]);

//     const [editing, setEditing] = useState(true)

//     useEffect(() => {
//         const llamaDatos = async() => {
//             const data = await fetch(`http://localhost:3001/api/user/${id}`)
//             const usuario = await data.json()
//             setUsuario(usuario);
//             // setDatos({
//             //     id: usuario.id, name: usuario.name, salary: usuario.salary
//             // });
//         }
        
//         llamaDatos()
//     }, [id])

//     const [datos, setDatos] = useState({
//         id: usuario.id,
//         name: usuario.name,
//         salary: usuario.salary
//     })

//     const handleInputChange = (event) => {
//         setDatos({
//             ...datos,
//             [event.target.name] : event.target.value
//         })
//     }

//     const onSubmit = (event) => {
//         event.preventDefault();
//         event.target.reset();
//         console.log('enviando datos... ' + datos.id + ' ' + datos.name + ' ' + datos.salary);
        
//         const enviaDatos = () => {
//                 fetch(`http://localhost:3001/api/user/${id}`, {
//                 method: 'PUT',
//                 // headers: {
//                 //     'Content-Type': 'application/json',
//                 // },
//                 body: JSON.stringify(datos)
//             }).then(res => res.json()).then(data => console.log(data))
//         }

//         enviaDatos()
//     }

//     return (
//         <div className="container mt-5">
//             <h1>Editar usuario</h1>
//             <hr />
//             <h4>A continuación se encuentran los datos del usuario {id}</h4>
//             <Form
//                 onSubmit={onSubmit}
//                 handleInputChange={handleInputChange}
//                 usuario={datos}
//                 editing={editing}
//             />
//         </div>
//     )
// }



