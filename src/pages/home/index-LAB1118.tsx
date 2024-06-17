import {Link} from 'react-router-dom'
import ButtonFatec from "../../components/buttonfatec/ButtonFatec"
import InputFatec from '../../components/inputfatec'

export default function Home() {
    return (
        <>
            <p>Olá mundo!</p>
            <hr />
            <InputFatec
                placeholder="Digite seu nome"
                defaultValue="" type="text" /><br />
            <InputFatec
                placeholder="Digite seu email"
                defaultValue="" type="email" /><br />
            <InputFatec
                placeholder="Digite seu telefone"
                defaultValue="" type="text" /><br />
            <ButtonFatec label="Botão 2" type="button" />
            <hr />
            <Link to="/sobre">Sobre</Link>
        </>
    )
}