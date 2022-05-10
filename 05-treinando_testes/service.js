const {
    get
} = require('axios')

/**
 * Parte 01
 * 1 - Import Axios
 * 2 - criar função para obter nomeBase
 * 3 - Definir URL Base + url com params
 * 4 - Request com get(url) <-- Axios
 * 5 - retornar resultado
 * 6 - Exportar service
 * 
 * Parte 02
 * 1 - Criar função para corrigir retorno
 * 2 - Função retorna nome e peso
 */

const URL = `https://swapi.dev/api/people`


async function obterPessoas (nome) {
    //construindo URL para requisição
    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url)
    return result.data.results.map(mapearPessoas)
    // ${URL}/?search=${nome}&format=json
}

function mapearPessoas(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}



module.exports = {
    obterPessoas
}