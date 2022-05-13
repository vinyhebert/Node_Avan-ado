const {
    deepEqual, ok
} = require('assert')

const database = require('./database')
/**
 * Pre-requisitos
 * 1 - Inicialização do projeto
 * 2 - Instalação Mocha -> Globalmente | Instalação mocha dependencia de desenvolvimento npm i --save-dev mocha
 * 
 * Criando test
 * 1 - Criando arquivo de teste
 * 2 - importando metodo deepEqual do assert
 * 3 - criando Suite
 * 4 - Criando Caso de teste
 * 5 - Expectativa de retorno
 * 6 - objeto para cadastrar --> DEFAULT_ITEM_CADASTRAR
 * 7 - Rodando Teste com o bjetivo de falhar
 * 
 * - Criando JSON
 * 8 - Mudando Objetivo para READ
 * 
 * - Criando nosso servico no database.js
 * 
 */

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Falsh',
    poder: 'Speed',
    id: 1
}

describe('suite de manipulação de Herois', ()=> {
    //Antes de tudo, cadastrar o item no nosso JSON
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id) // resultado entre chaves é uma tecnica chamado destructor que podemos capturar a posição do array que quisermos | Forma auternativa resultado[0]
        deepEqual(resultado, expected)
    })
    it('deve cadastrar um heroi, usando arquivos', async () => {
    
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        
        deepEqual(actual, expected)
    })
})