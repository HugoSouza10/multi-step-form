import * as C from './style';
import {Theme} from '../../components/Theme';
import {useForm, FormAction} from '../../contexts/formContext';
import { useNavigate, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from 'react';


export const FormStep3 = () => {

    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(()=>{

        if(state.name == '') {
            return navigate("/step2");
        }else {
            dispatch({
                type:FormAction.setCurrentStep,
                payload: 3
            })
        }

       
    },[]);
    

    const handdleNextStep = () => {
        if(state.email && state.github != "") {
            return navigate("/step4");
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
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                   Qual seu e-mail?
                    <input 
                        type="email"
                        value={state.email}
                        onChange={handdleEmailChange}
                    />
                </label>


                <label>
                   Qual seu github?
                    <input 
                        type="url"
                        value={state.github}
                        onChange={handdleGithubChange}
                    />
                </label>

                <Link className="backButton" to="/step2">Voltar</Link>
                <button onClick={handdleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}