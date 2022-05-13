const {
    deepEqual, ok
} = require('assert')

const database = require('./database')



const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('suite de manipulação de Herois', () => {
    it('Deve pesquisar um heroi usando um aquivo', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)

    })
})