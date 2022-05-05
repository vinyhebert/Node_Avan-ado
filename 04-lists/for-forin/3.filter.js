const {obterPessoas} = require('./service')


Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let index = 0; index <= this.length -1; index ++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}

async function main () {
    try {
        const {
            results
        } = await obterPessoas (`a`)

        const familiaLars = results.filter(function (item) {
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)

        // const familiaLars = results.filter(function (item) {
        //     //por padrão precisa retornar um boleano 
        //     //para informar se deve manter ou remover da lista
        //     //false > remove da lista
        //     //true > mantem
        //     //não encontrou = -1
        //     // Encontrou = posicaoNoArray
        //     //06:50 time stop 
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1

        // })
    }
    catch (error){
        console.log('DEU RUIM', error)
    }
}

main()