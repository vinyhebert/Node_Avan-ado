const assert = require('assert')

const {
    obterPessoas
} = require('./service')

/**
 * Parte 01
 * 1 - import assert
 * 2 - criar suite de testes
 * 3 - Definir formato de retorno
 * 4 - Definir nomeBase
 * 5 - Criar Servico para obter o nome atraves do nomeBase
 * 6 - Comparar formato de retorno com resultado da resposta do serviço
 * 
 * Expectativa: Que o teste quebre
 * 
 * Parte 02
 * 1 - Criar função para resolver formato de entrada -> Obj que o teste passe
 */

//Criar a Switch de testes
describe ('Star Wars Testes', function () {
    //Definindo retorno
    it('Deve buscar o r2d2 com o formato correto', async () => {
        //Expectativa de retorno
        const expected = [{
            nome: 'R2-D2',
            peso: '96'
        }]
        //Defindo parametro da busca --> Nome do Robo R2-D2
        const nomeBase = 'r2-d2'
        const resultado = await obterPessoas(nomeBase)

        assert.deepEqual(resultado, expected)
        //assert.deepEqual(resultado, expected)
    })
    

})

