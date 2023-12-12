import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Componentes/Card"
export default function Home() {

    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [] ;

    return(
        <div>
            <nav>
            <header>
                <h1>Videos Legais</h1>
            </header>
            </nav>

            {listaLocalStorage.slice(-4).map((video) => <Card video = {video}/>)}

            <footer>
                rodapé
            </footer>
        </div>
    )
}