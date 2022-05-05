


 /**
  * Objetivo -> utilizar callbacks e entender como:
*     -Utiliza-las: Passamos a função callback como parametro. Ela recebe dois valores (1. ERR ; 2. ValorEsperado)
  *     -Qual proposito: Proposito é tornar a ordem de execução previsivel  
  * 
  */
 function obterUsuario(funcCallback){
    
    return funcCallback('Deu ruim', {nome: 'Aladin'})
}

//O q eu quero de resultado final? Imprimir info de usuarios
function resolverUsuario(err, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario (err, usuario) {
    if(err) {
        console.log("Deu ruim em usuario", err)
        return;
    }

    
})
