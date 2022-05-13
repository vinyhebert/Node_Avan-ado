const {
    readFile, 
    writeFile
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
const writeFileAsync = promisify(writeFile)

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

    async escreverArquivo(dados) {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true

    }
    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
        const id =  heroi.id <= 2 ? heroi.id : Date.now() // Caso o ID não seja passado usamos o Date.now para cria-lo dinamicamente
        //concatenando objetos
        const heroidComId = {
            id,
            ...heroi // esta é a forma de concatenar objetos no JS
        }
        const dadosFinal = [
            ...dados,
            heroidComId
        ]
        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }
    async listar (id) {
        const dados = await this.obterDadosArquivo()
        //Objetivo: Buscar pelo ID, caso não seja passado o ID a busca sera completa
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))

        return dadosFiltrados
    }
}

module.exports = new Database()