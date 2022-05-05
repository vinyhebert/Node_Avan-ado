const { obterPessoas } = require('./service')


Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this [0]
    for (let index = 0; index <= this.length -1; index ++) {
        valorFinal = callback(valorFinal, this[index], this)
    }

    return valorFinal
}

async function main () {
    try {
        const {
            results
        } = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos', pesos)

        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        }, 0) //O Zero no final é o valor que sera considerado caso o array venha vazio

        const minhaLista = [
            ['Erick', 'Wendel'],
            ['NodeBR', 'Nerdzão']
        ]

        const total = minhaLista.meuReduce((anterior, proximo) => {
                return anterior.concat(proximo)
            },[])//valor padrão caso a lista esteja vazia
            .join(', ')

        console.log('total', total)
    
    } catch (error) {
        console.error(`Deu Ruim`, error)
    }
}

main()