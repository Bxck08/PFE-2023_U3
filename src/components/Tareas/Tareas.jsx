import React, {useState} from "react";

const listaEjemplo = [
{
    id:1,
    nombre:'alimentar a los leones'
},
{
    id:2,
    nombre:'jugar con las quimeras'
},
{
    id:3,
    nombre:'mimir'
}
]

const Tareas = () =>{
    const [tareas,setTareas] = useState(listaEjemplo)
    const [nombreTarea,setNombreTarea] = useState('')

    const handleModificarTarea = (evento) => {
        setNombreTarea(evento.target.value)
    }

    const handleBotonAgregarTarea = (evento) =>{
        if (nombreTarea == ''){
            alert('Debes escribir una tarea')
        }
        else{
            let tareaNueva = {
                id:tareas.length + 1,
                nombre:nombreTarea
            }
            setTareas([...tareas,tareaNueva])
            setNombreTarea('')
        }
    }

    return (
    <div>
        <div className="row">
            <div className="col-12">
                <h1>Tareas</h1>
            </div>
            <div className="col-12">
                <label htmlFor="tarea">Añadir nueva tarea</label>
                <input type="text" onChange={handleModificarTarea} className='form-control my-2' id="nombre-tarea" value={nombreTarea} />
                <button type="button" className="btn btn-primary" onClick={handleBotonAgregarTarea}>Añadir</button>
            </div>
            <div className="col-12 mt-4">
                <h2>Lista de tareas</h2>
            </div>
            <div className="col-12">
                <ul className="list-group">
                    {
                        tareas.map(tarea => <li className="list-group-item" key={tarea.id}>{tarea.nombre}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>
    )
}


export default Tareas