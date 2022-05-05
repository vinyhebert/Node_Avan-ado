const EventEmitter = require('events')
const { stdin } = require('process')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuario clicou', click)
})


const sdtin = process.openStdin()
stdin.addListener('data', function (value) {
    console.log(`Voce digitou: ${value.toString().trim()} `)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no Ok')

// let count = 0
// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'no ok' + (count ++))
// }, 1000);

