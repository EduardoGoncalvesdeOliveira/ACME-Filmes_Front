export async function getFilmes() {
    const url = 'http://localhost:8080/v2/acme/filmes'
    const response = await fetch(url)
    const data = await response.json()
    console.table(data.Filmes)

    return data.filmes
}


export async function getFilmes(id) {
    const url = `http://10.107.134.43:8080/v2/acme/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]
}

export async function postFilme(filme) {
    const url = 'http://10.107.134.43:8080/v2/acmefilmes/filme'
    const options = {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)

    return response.ok
}