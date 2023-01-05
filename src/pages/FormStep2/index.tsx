import * as C from './style';
import {Theme} from '../../components/Theme';
import {useForm, FormAction} from '../../contexts/formContext';
import { useNavigate, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


export const FormStep2 = () => {

    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(()=>{

        if(state.name == '') {
            navigate('/');
        }else {
            dispatch({
                type:FormAction.setCurrentStep,
                payload: 2
            })
        }
       
    },[]);

    const handdleNextStep = () => {
        if(state.name != "") {
            return navigate("/step3");
        }else {
            alert("Preencha os dados");
        }
       
    }

    //Ações para alterar o nosso contexto

    const handdleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type:FormAction.setName,
            payload: e.target.value
        });
    }

    const setLevel = (level:number) => {
        dispatch({
            type:FormAction.setLevel,
            payload: level
        })
    }


    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, qual o seu nível de senioridade?</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="👶"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já sou sênior"
                    icon="👴"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />
                <Link className="backButton" to="/">Voltar</Link>
                <button onClick={handdleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}