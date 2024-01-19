//VALORES PADRÕES

function Soma(a, b ,c){
    a = a || 1 //só vai receber o valor 1 se o A retornar false, ou seja. como o 0 representa false, você não consegue somar zero com zero, porque ele vai receber o valor de 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(Soma(), Soma(2), Soma(2,3), Soma(2,3,4), Soma(0, 0, 0))

//OUTRAS FORMAS

function Soma(a, b, c){
    a = a !== undefined ? a : 1; //se A for diferente de Undefined então recebe A, senão 1
    b = 1 in arguments ? b : 1; //se B estiver presente no índice do Array arguments, então recebe B, senão recebe 1
    c = isNaN(c) ? 1 : c; //se C for Not a Number, então recebe um, senão recebe C (Mais recomendado, pois não envia uma string)

    return a + b + c
}

console.log(Soma(), Soma(2), Soma(2,3), Soma(2,3,4))

//Valor padrão Ecma 2015 (mais adequado)

function Soma(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(Soma(), Soma(2), Soma(2,3), Soma(2,3,4))