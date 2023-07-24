import React,{useState} from "react";

const AgregarTareaFragments = ({nombreTarea,handleModificarTarea,handleBotonAgregarTarea}) =>{
    return (
        <>
            <div className="col-12">
                <label htmlFor="tarea">Añadir nueva tarea</label>
                <input type="text" onChange={handleModificarTarea} className='form-control my-2' id="nombre-tarea" value={nombreTarea} />
                <button type="button" className="btn btn-primary" onClick={handleBotonAgregarTarea}>Añadir</button>
            </div>
        </>
    )
}


export default AgregarTareaFragments


