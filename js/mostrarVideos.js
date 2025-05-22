import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function construirCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${descricao}</h3>
                <p>236 mil visualizações</p>
            </div>`;
    return video
}

async function listaVideos() {
    try {
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(element => lista.appendChild(construirCard(element.titulo, element.descricao, element.url, element.imagem)));
    } catch(error) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos.<br> ${error}</h2>`
    }
}


listaVideos();