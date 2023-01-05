import { Children, ReactNode } from 'react';
import { Sidebaritem } from '../Sidebaritem'
import * as C from './style';


//Aqui recebemos um children para montar a página conforme esse tema

import {Header} from '../Header';
import {useForm, FormAction} from '../../contexts/formContext';


type Props = {
    children:ReactNode;
}

export const Theme = ({children}:Props) => {

    const {state} = useForm();


    return (
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.Sidebar>
                       <Sidebaritem
                            title = "Pessoal"
                            description = "Se identifique"
                            icon = "profile"
                            patch = "/"
                            pointMarked = {state.currentStep == 1}

                       />

                    <Sidebaritem
                            title = "Profissional"
                            description = "Seu nível"
                            icon = "book"
                            patch = "/step2"
                            pointMarked = {state.currentStep == 2}
                            

                       />



                    <Sidebaritem
                            title = "Contatos"
                            description = "Como te achar"
                            icon = "mail"
                            patch = "/step3"
                            pointMarked = {state.currentStep == 3}
                    ></Sidebaritem>


                    <Sidebaritem
                            title = "Status"
                            description = "Confira seus dados"
                            icon = "mail"
                            patch = "/step4"
                            pointMarked = {state.currentStep == 4}

                       />
                    </C.Sidebar>

                    
                  
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}