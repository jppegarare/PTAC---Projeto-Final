import { useState } from "react";
import { Link } from "react-router-dom";
import"./style.css"
import { useEffect } from "react";
export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")|| [] )
    const[titulo, setTitulo] = useState("")
    const[url, setUrl] = useState("")
    const[descricao, setDescricao] = useState("")
    const[listas, setListas] = useState(listaLocalStorage || [])
    const[identidade, setIdentidade] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.identidade + 1 || 1)

    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(listas))}, [listas])

    const salvar = (e) => {
        e.preventDefault()
        setListas([...listas, {
            titulo:titulo, url:url, descricao:descricao, identidade:identidade
        }])
        setIdentidade(identidade + 1)
        console.log(listas)
    };
   

    return (
        <div class="container">
            <Link to="/">Home</Link>
            <h1>Informe o Foragido </h1>

            <form onSubmit={salvar}>
                <h3>Adicionar título do vídeo</h3>
                <input class="form" type="text" value={titulo} onChange={(e) => {setTitulo(e.target.value)}}></input>

                <h3>Adicionar Url do vídeo?</h3>
                <input class="form" type="text" value={url} onChange={(e) => {setUrl(e.target.value)}}></input>

                <h3>Adicionar descrição</h3>
                <input class="form" type="text" value={descricao} onChange={(e) => {setDescricao(e.target.value)}}></input>

                <br/>
                <br/>

                <button class="buttonRegister">Registrar</button>
            </form>

            {listas.map((atv) => 
                <div key = {atv.identidade}>
                    
                    <Link to={`/Detalhe/${atv.identidade}`}>
                        <li>{atv.identidade}</li>
                    </Link>
                    <p class="info">{atv.titulo}</p>
                    <p class="info">{atv.url}</p>
                    <p class="info">{atv.descricao}</p>   

                    <iframe 
                     width="1309"
                     height="499"
                     src={`https://www.youtube.com/embed/${video.url.slice(17)}`}
                     title="fiz um jogos mortais com personagens no the sims 4" 
                     frameborder={0} 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>

                    </iframe>

                </div>
            )}
        </div>

    );
            }