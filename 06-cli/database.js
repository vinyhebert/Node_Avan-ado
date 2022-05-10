const {
    readFile
} = require('fs')

const { promisify } = require('util')
/**
 * 1 - Criamos Classe
 * 2 - Criamos metodo Listar
 * 3 - Criamos assinatura dos metodos auxs --> 1.obterDadosArquivo 2.escreverArquivo
 * 4 - Exportamos a instancia --> new Database()
 * 5 - Contructor -> Criando definição do nome do nosso Obj
 * 6 - Usando FS para ler arquivos
 * OBS: O FS usa callbacks --> Iremos converte-los para Promise com promisefy
 * 7 - obterDadosArquivos com promise passando nome do arquivo e formato utf8
 * 8 - Compondo a função listar
 * 
 */

const readFileAsync = promisify(readFile)

//outra forma de obter dados do json
//const dadosJson = require('./herois.json')

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json' //Definição do nome do OBJ
    }

    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo() {


    }

    async listar (id) {
        const dados = await this.obterDadosArquivo()
        //Objetivo: Buscar pelo ID, caso não seja passado o ID a busca sera completa
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))

        return dadosFiltrados
    }
}

module.exports = new Database()