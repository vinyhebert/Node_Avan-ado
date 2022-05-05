
const util = require ('util')
const obterEndAsync = util.promisify(obterEnd)


function obterUsuario() {

    return new Promise (function resolvePromise (resolve, reject) {
        setTimeout(function (){
            return resolve ({
                id: 1,
                nome: 'Glaubeir',
                dataNascimento: new Date()
            })
        },2000)
    })

    

}


function obterTel (idUsuario) {

    return new Promise (function resolvePromise (resolve, reject) {
        setTimeout(() => {
            return resolve ({
                ddd: 11,
                telefone: '342156'
            }, 2000)
        })
    })
    

}

function obterEnd (idUsuario, callback) {

    setTimeout(()=> {
        return callback (null, {
            rua: "dos Bobos",
            numero: 120
        })
    }, 2000)
}

const usuarioPromise = obterUsuario()

usuarioPromise
    .then(function (usuario) {
        return obterTel(usuario.id)
        .then (function resolveTel (result) {
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                    
                },
                telefone: result
            }
        })
    })

    .then(function (resultado) {
        const endereco = obterEndAsync(resultado.usuario.id)
        return endereco.then(function resolveEndereco (result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })

    .then(function (resultado) {
        console.log (`
            Nome: ${resultado.usuario.nome}
            Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        `)
    })

