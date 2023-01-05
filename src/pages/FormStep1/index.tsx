import * as C from './style';
import {Theme} from '../../components/Theme';
import {useForm, FormAction} from '../../contexts/formContext';
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from 'react';


export const FormStep1 = () => {

    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch({
            type:FormAction.setCurrentStep,
            payload: 1
        })
    },[]);

    const handdleNextStep = () => {
        if(state.name != "") {
            return navigate("/step2");
        }else {
            alert("Preencha os dados");
        }
       
    }

    const handdleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type:FormAction.setName,
            payload: e.target.value
        });
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo:
                    <input 
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handdleNameChange}
                    />
                </label>

                <button onClick={handdleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}