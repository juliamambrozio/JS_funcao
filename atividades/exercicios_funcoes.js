//Exercício 1
function Resultado(num1, num2){
     console.log(num1 + num2)
     console.log(num1 - num2) 
     console.log(num1 * num2) 
     console.log(num1 / num2) 
}

Resultado(1, 2)

//Exercício 2
function classificacaoTriangulo(h1, h2, b){
    if(h1 == h2 && h1 == b && h2 == b){
        console.log('Os três lados são iguais (Equilátero)')
    }else if(h1 == h2 || h1 == b || h2 == b){
        console.log('Os dois lados são iguais (Isósceles)')
    }else if(h1 != h2 && h1 != b && h2 != b){
        console.log('Todos os lados são diferentes (Escaleno)')
    }
}

classificacaoTriangulo(1, 4, 2)

//Exercício 3
function Exponencial(base, expoente){
    console.log(Math.pow(base,expoente))
}

Exponencial(2, 3)

//Exercício 4
function Divisao(dividendo, divisor){
    console.log(`Resultado da divisão ${dividendo / divisor}`)
    console.log(`Resultado do módulo ${dividendo % divisor}`)
}
Divisao(2, 4)

//Exercício 5
function retornarDinheiro(valor = 0.30000000000000004){
    return `R$${valor.toFixed(2).replace('.', ',')}`
}
console.log(retornarDinheiro())

//Exercício 6
function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    const jurosSimples = capitalInicial * taxaJuros * tempoAplicacao
    const Montante = capitalInicial + jurosSimples   
    return jurosSimples, Montante
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
    return capitalInicial * Math.pow((1 + taxaJuros), tempoAplicacao)  
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

//Exercício 7
function formulaBhaskara(ax2, bx, c){
    let delta = (Math.pow(bx, 2) - 4 * ax2 * c)

    if(delta < 0){
        console.log('Delta é negativo')
    }

  
    const resultado1 = (-bx + Math.sqrt(delta) / (2 * ax2))
    const resultado2 = (-bx - Math.sqrt(delta) / (2 * ax2))

  

    return console.log(`${resultado1}, ${resultado2}`)
   
}

formulaBhaskara(1, 3, 2)

//Exercício 8
/* let pontuacaoJogos = [2, 10, 24, 12, 14]

function desempenho(pontuacaoJogos){
    let jogos = []
    for(i = 0; i < pontuacaoJogos.length; i++){
        if(pontuacaoJogos[i] > pontuacaoJogos[i++]){
            let melhorJogo = 0
            return melhorJogo++
        }
        if(pontuacaoJogos.toFilter(function (i){
            if(pontuacaoJogos[i] < pontuacaoJogos[i++]){
                console.log(`${[i]}`)
            }
        }))
    }

}

desempenho(pontuacaoJogos) */
//Exercício 9
function Notas(nota){
    const notaMaxima = 100
    const notaMinima = 0

    if(nota > 40){
        const módulo = nota % 5 
    }


}
//Exercício 10
