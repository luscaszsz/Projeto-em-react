import { useState } from 'react';
import Formulario from './componentes/Formulario/index.js';
import Head from './componentes/cabeca/Head.js';



function App() {
  const [mensagens, setMensagem] = useState('')
  const novaMensagemAdicionada = (mensagem) =>{
    console.log(mensagens)
    setMensagem([...mensagens, mensagem])
  }

  return (
    <div>
      <Head/>
      <Formulario mensagemCadastrada={mensagem => novaMensagemAdicionada(mensagem)}/>

    </div>
  );
}

export default App;
