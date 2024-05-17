import { useState } from 'react';
import Formulario from './componentes/Formulario/index.js';

import Footer from './componentes/Footer/index.js'

import Apresentacao from './componentes/cabeca/Head.js';



function App() {
  const [mensagens, setMensagem] = useState('')
  const novaMensagemAdicionada = (mensagem) =>{
    console.log(mensagens)
    setMensagem([...mensagens, mensagem])
  }

  return (
    <div>
      <Apresentacao/>
      <Formulario mensagemCadastrada={mensagem => novaMensagemAdicionada(mensagem)}/>
      <Footer/>
    </div>
  );
}

export default App;
