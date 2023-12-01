import { useState } from "react";
import { Link } from "react-router-dom";
import"./style.css"
export default function Home() {
    return(
        <div>
            <nav>
            <header>
                <h1>Videos Legais</h1>
            </header>
            </nav>
            <h2>
            <Link to="/ToDo">Informe</Link>
            </h2>


            <footer>
                oi
            </footer>
        </div>
    )
}