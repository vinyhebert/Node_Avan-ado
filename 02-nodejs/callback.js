/**
 * 0- Preciso obter um usuario
 * 1- Preciso obter numero de telefone de um usuario pelo ID
 * 2- Obter Endereço do User pelo ID
 * 
 * 
 * 
 */


function obterUsuario(callback){
    setTimeout (function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}


function obterTel(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            telefone: '1199002',
            ddd: 11,
        })
    }, 2000)
}

function obterEnd(idUsuario, callback) {
    setTimeout(()=> {
        return callback(null, {
            rua: 'dos Bobos',
            numero: 200
        })
    }, 2000);
}

function resolverUsuario(err, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario (err, usuario) {
    if(err) {
        console.log("Deu ruim em usuario", err)
        return;
    }

    obterTel(usuario.id, function resolverTel (err1, tel) {
        if(err1) {
            console.log("Deu ruim em Telefone", err)
            return;
        }

        obterEnd(usuario.id, function resolverEnd (err2, end) {
            if(err2) {
                console.log("Deu ruim em Endereço", err)
                return;
            }
        console.log(`
            Nome: ${usuario.nome},
            Endereco: ${end.rua},${end.numero}
            Telefone: (${tel.ddd})${tel.telefone}
        `)
        })
    })

    

    
})
//const telefone = obterTel(usuario.id)

//console.log('telefone', telefone)