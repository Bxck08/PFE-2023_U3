import React,{useState} from "react";

const Ejercicio01 = () => {
    const [valorNeto, setvalorNeto] = useState(0)
    const [valorTotal, setvalorTotal] = useState(0)

    const handleValorNeto = (evento) => {
        setvalorNeto(parseInt(evento.target.value))
    }

    const handleCalcular = (evento) => {
        let iva = valorNeto * 0.19
        let total = valorNeto + iva
        setvalorTotal(total)
        
    }

    return(
        <>
            <h2>Ingrese valor neto</h2>

            <label htmlFor="neto">Valor neto</label>
            <br />
            <input id='neto' name='neto' type="number" onChange={handleValorNeto}/>
            <br />
            <button type="button" onClick={handleCalcular}>Calcular</button>
            <p>Valor neto: {valorNeto}</p>
            <p>Valor total: {valorTotal}</p>
        </>
    )
}

export default Ejercicio01