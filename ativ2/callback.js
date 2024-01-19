const fabricantes = ['Apple', 'Samsung', 'Motorola']

function ImprimirFabricantes(nome, indice){
    console.log(`${indice + 1.}  ${nome}`)
} //função de callback: chamada toda vez que tiver um evento (looping)

fabricantes.forEach(ImprimirFabricantes)

//EXEMPLO 2

/* let notas = [9, 3, 4, 8, 10]

function ImprimirNotas(nota){
    if(nota < 7){
        let notas2 = notas.push(nota)
        console.log(notas2)
       
        
    }
}

notas.forEach(ImprimirNotas) */

let notas = [9, 3, 4, 8, 10]

notasBaixas = notas.filter(function(nota) {
    return nota < 7

})
console.log(notasBaixas)
console.log(notas)