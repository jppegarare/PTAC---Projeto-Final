import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Componentes/Card"
export default function Detalhe() {

    const {identidade} = useParams;
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [] ;
    const atividade = listaLocalStorage.filter( (video) => {
        if(video.identidade == identidade){
            return video
        }
        return null
    })

    return(
        <Card video={atividade[0]}></Card>
    )
}