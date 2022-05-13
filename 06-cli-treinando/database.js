
const {
    readFile
} = require('fs')

const {promisify} = require('util')

//Convertendo callback para Promise
const readFileAsync = promisify(readFile)

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo() {
        const arquivo =  await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    async listar (id) {
        const dados = await this.obterDadosArquivo()
        console.log('dados', dados)
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))

        return dadosFiltrados
    }

}

module.exports = new Database()