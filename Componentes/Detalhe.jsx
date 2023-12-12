import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Componentes/Card"
export default function Detalhe() {

    const {id} = useParams;
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [] ;
    const atividade = listaLocalStorage.filter( (video) => {
        if(video.id == id){
            return video
        }
        return null
    })

    return(

        <div class="card">
 <Card video={atividade[0]}></Card>
        </div>
       
    )
}