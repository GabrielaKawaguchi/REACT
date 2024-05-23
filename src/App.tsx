import './App.css'
import ButtonFatec from './components/buttonfatec/ButtonFatec'

function App() {

  return (
    <>
      <p>Entre em contato</p>
      <hr/>
      <form>
        <input type='text' placeholder='Nome'></input>
        <input type='email' placeholder='Email'></input>
        <input type='number' placeholder='Telefone'></input>
      </form>
      <hr/>
      <ButtonFatec label="Fatec: Enviar mensagem" type="button"/>
    </>
  )
}

export default App
