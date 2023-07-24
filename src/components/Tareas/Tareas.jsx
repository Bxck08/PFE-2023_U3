import React, {useState} from "react";
import AgregarTareaFragments from "./fragments/AgregarTareaFragments";
import MostrarTareasFragments from "./fragments/MostrarTareasFragments";

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
    const handleEliminarTarea = (id) => {
        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.id !== id
        })
        setTareas(tareasFiltradas)
    }

    return (
    <div>
        <div className="row">
            <div className="col-12">
                <h1>Tareas</h1>
            </div>
            <AgregarTareaFragments
                nombreTarea={nombreTarea}
                handleModificarTarea={handleModificarTarea}
                handleBotonAgregarTarea={handleBotonAgregarTarea}
            />
            <div className="col-12 mt-4">
                <h2>Lista de tareas</h2>
            </div>
            <MostrarTareasFragments
                tareas={tareas}
                handleEliminarTarea={handleEliminarTarea}
            />
        </div>
    </div>
    )
}


export default Tareas