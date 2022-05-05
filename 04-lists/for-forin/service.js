const axios = require('axios')
const URL = `https://swapi.dev/api/people`

async function obterPessoas (nome) {
    const url = `${URL}/?search=${nome}&format=json`
    //const url = `https://swapi.dev/api/films/1/`
    const response = await axios.get(url)
    return response.data
}

obterPessoas('r2')
    .then(function (resultado) {
        //console.log('resultado',resultado)

    })
    .catch(function (error) {
        console.error('Deu ruim!', error)
    })


    module.exports = {
        obterPessoas
    }