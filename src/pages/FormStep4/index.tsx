import * as C from './style';
import {Theme} from '../../components/Theme';
import {useForm, FormAction} from '../../contexts/formContext';
import { useNavigate, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from 'react';


export const FormStep4 = () => {

    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(()=>{

        if(state.email == '' && state.github == '') {
            return navigate("/step3");
        }else {
            dispatch({
                type:FormAction.setCurrentStep,
                payload: 4
            })
        }

       
    },[]);
    

    const handdleNextStep = () => {
        if(state.email && state.github != "") {
           console.log(state)
        }else {
            alert("Preencha os dados");
        }
       
    }

    const handdleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type:FormAction.setEmail,
            payload: e.target.value
        });
    }

    const handdleGithubChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type:FormAction.setGIthub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>Obrigado, {state.name}, Confira seus dados</h1>
                <p>Confira aqui se seus dados foram preenchido corretamento.</p>

                <table>
                <tr>
                    <th>Pessoal</th>
                    <th>Profissional</th>
                    <th>E-mail</th>
                    <th>Github</th>
                </tr>
                
                <tr>
                    <td>{state.name}</td>
                    <td>{state.level == 0 ? 'Junior': 'Sênior'}</td>
                    <td>{state.email}</td>
                    <td>{state.github}</td>
                </tr>
                
    
                </table>


                <hr />

              

                <Link className="backButton" to="/step2">Voltar</Link>
                <button onClick={handdleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}