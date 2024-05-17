
import './Formulario.css'
import Form from '../campoForm'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (mensagemCadast) =>{
    const nomesLista = ['Ruim','Médio','Bom']
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
                <Form label="Nome" placeholder="Digite seu nome" value={nome} aoAlterado={a=>setNome(a)}/>
                <Form label="Contato" placeholder="Algum meio de contato (cel, email...)" value={motivo} aoAlterado={value=>setMotivo(value)}/>
                <Form obrigatorio={true}label="Mensagem" placeholder="Me mande uma mensagem" value={email} aoAlterado={value=>setEmail(value)}/>
                <ListaSuspensa label = 'Como você avaliaria esse projeto?'itens = {nomesLista} value={time} aoAlterado={value=>setTime(value)}/>
                <Botao desc ="Submeter"/>
            </form>
        </section>
    )
}

export default Formulario