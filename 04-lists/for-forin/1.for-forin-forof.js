const service = require('./service')

async function main () {
    try {
        const result = await service.obterPessoas('a')
        const names = []
        console.time('time do for')
        for (let i=0 ; i <= result.results.length -1; i++){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('time do for')


        console.time('time do forIn')
        for (let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name) 
        }
        console.timeEnd('time do forIn')

        console.time('time do forOf')
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }

        console.timeEnd('time do forOf')
        console.log(`names`, names)
    }
    catch (error) {
        console.log(`error interno`, error)
    }
}

main()