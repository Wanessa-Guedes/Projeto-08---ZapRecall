// Função de inicializaçao da tela principal ou da tela de perguntas dependendo do estado de screen

import react from "react";
import React from "react";
import FirstPage from "./FirstPage";
import QuestionPage from "./QuestionsPage";
import "../css/reset.css";
import "../css/style.css";

export default function App(){

    let [screen, setScreen] = react.useState(false);
    
    function startScreen(){
        setScreen(true);
    }
    
    
    return(
        <>      
            {screen === false ? <FirstPage func={startScreen}/> : <QuestionPage />}
        </> 
        
    )
}