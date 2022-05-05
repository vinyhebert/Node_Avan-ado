const service = require('./service')

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length -1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}
async function main () {
    try {
        const result = await service.obterPessoas('a')
        //const names = []

        // result.results.forEach(item => {
        //     names.push(item.name)
        // });

        // const names = result.results.map(function (pessoa) {
        //     return pessoa.name
        // })

        //const names = result.results.map((pessoa) => pessoa.name)
        const names = result.results.meuMap((pessoa, indice) => {
            return pessoa.name
        })
        console.log(names)
    }
    catch (error) {
        console.log(`Deu Ruim`, error)
    }
}

main()