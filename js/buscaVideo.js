import { conectaApi } from "./conectaApi.js";
import  construirCard  from "./mostrarVideos.js";

async function buscarVideos(e) {
    e.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(element => lista.appendChild(construirCard(element.titulo, element.descricao, element.url, element.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="imagem__titulo">Não existem vídeos com esse termo</h2>`
    }
}

const botaoPesquisa = document.querySelector("[data-botaoPesquisa]");

botaoPesquisa.addEventListener("click", e => buscarVideos(e));