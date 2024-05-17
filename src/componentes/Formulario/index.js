
import './Formulario.css'
import Form from '../campoForm'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (mensagemCadast) =>{
    const nomesLista = ['Lucas','Silvio','Rosângela']
    const [nome, setNome] = useState('')
    const [motivo, setMotivo] = useState('')
    const [email,setEmail] = useState('')
    const [time,setTime] = useState('')
    
    const submetido = (evento) =>{
        evento.preventDefault()
        mensagemCadast.mensagemCadastrada({nome, motivo, email, time})
    }


    return(
        <section className='formulario'>
            <form onSubmit={submetido}>
                <Form label="Nome" placeholder="nome" value={nome} aoAlterado={a=>setNome(a)}/>
                <Form label="Motivo" placeholder="motivo de contato" value={motivo} aoAlterado={value=>setMotivo(value)}/>
                <Form obrigatorio={true}label="Mensagem" placeholder="email (corpo)" value={email} aoAlterado={value=>setEmail(value)}/>
                <ListaSuspensa label = 'invetar algo pra colocar depois'itens = {nomesLista} value={time} aoAlterado={value=>setTime(value)}/>
                <Botao desc ="Submeter"/>
            </form>
        </section>
    )
}

export default Formulario