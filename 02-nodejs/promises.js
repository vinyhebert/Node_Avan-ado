/**
 * 0- Preciso obter um usuario
 * 1- Preciso obter numero de telefone de um usuario pelo ID
 * 2- Obter Endereço do User pelo ID
 * 3- Imprimir dados na Tela
 * 
 * importamos um modulo interno do node que converte callback em promise automaticamente -> util
 * 
 */
const util = require('util')
const obterEndAsync = util.promisify(obterEnd)

 function obterUsuario(){
     //quando der algum problema -> reject (ERRO)
     //quando success -> RESOLV

     return new Promise (function resolvePromise (resolve, reject) {
        
        setTimeout (function () {
            //return reject (new Error ('Deu ruim de verdade'))
            
            return resolve ({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
     })

    
}


function obterTel(idUsuario){

    return new Promise (function resolvePromise (resolve, reject) {
        setTimeout(() => {

            return resolve ({
                telefone: '1199002',
                ddd: 11,
            })
        }, 2000)
    })
    
}

//Callback que foi convertida para Promise com a Lib Util -> Nativa JS
function obterEnd(idUsuario, callback) {
    setTimeout(()=> {
        return callback(null, {
            rua: 'dos Bobos',
            numero: 200
        })
    }, 2000);
}

const usuarioPromise  = obterUsuario()

usuarioPromise
    .then(function (usuario) {
        return obterTel(usuario.id)
        .then (function resolverTefone (result) {
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
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd})-${resultado.telefone.telefone}
        `)

    })
    .catch(function (error) {
        console.log(`Deu Ruim`,error)
    }) 
//para manipular o sucesso usamos a função .then
//para manipular erro usamos o .catch



// obterUsuario(function resolverUsuario (err, usuario) {
//     if(err) {
//         console.log("Deu ruim em usuario", err)
//         return;
//     }

//     obterTel(usuario.id, function resolverTel (err1, tel) {
//         if(err1) {
//             console.log("Deu ruim em Telefone", err)
//             return;
//         }

//         obterEnd(usuario.id, function resolverEnd (err2, end) {
//             if(err2) {
//                 console.log("Deu ruim em Endereço", err)
//                 return;
//             }
//         console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${end.rua},${end.numero}
//             Telefone: (${tel.ddd})${tel.telefone}
//         `)
//         })
//     })

    

    
// })
