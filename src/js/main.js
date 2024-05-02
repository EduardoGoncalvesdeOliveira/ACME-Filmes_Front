import { getFilmes, getFilme } from "./filmes.js";

function criarCard(filme) {
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    const valor = document.createElement('button')
    valorButton.textContent = filme.valor_unitario

    card.appendChild(titulo, valor)
    return card
}

async function preencherContainer() {
    const container = document.querySelector('body')
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
    })

}

preencherContainer()

filme = {
    "nome": "O Segredo do Vale",
    "sinopse": "Um drama emocionante que explora os segredos de uma pequena cidade no interior.",
    "duracao": "2 horas e 15 minutos",
    "data_lancamento": "2022-08-25",
    "data_relancamento": null,
    "foto_capa": "https://exemplo.com/foto_vale.jpg",
    "valor_unitario": 29.99
}

console.table(await getFilmes(1))