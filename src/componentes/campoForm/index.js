import './Form.css'


const Form = (propriedade) => {
    
    const place = `Digite seu ${propriedade.placeholder}`

    
    const aoDigitado = (evento) =>{
        propriedade.aoAlterado(evento.target.value)
    }
    
    return(
        <div className="campo-texto">
            <label>{propriedade.label}</label>
            <input value={propriedade.valor} onChange={aoDigitado} required={propriedade.obrigatorio} placeholder={place}/>
        </div>
    )
}

export default Form