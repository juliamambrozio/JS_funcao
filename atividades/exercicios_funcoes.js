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

    if(nota <= notaMaxima && nota >= notaMinima){

    if(nota > 37){
        const modulo = nota % 5 
        if(modulo != 0){
            if(nota >= 38){
            //console.log(Math.floor(nota / 5) * 5 + 5)
            let notaFinal = Math.floor(nota / 5) * 5 + 5
            console.log(`Aprovado! Sua nota é ${notaFinal}`)
        }

            
        }else{
            console.log(`Aprovado! Sua nota é ${nota}`)
        }
    }else{
        console.log(`Reprovado, sua nota é ${nota}`)
    }

}else{
    console.log('Nota inválida')
}
}
Notas(37)

//Exercício 10
function divisivelPor3(num){
    numero = num % 3
    if(numero == 0){
        return console.log(true)
    }else{
        return console.log(false)
    }
}

divisivelPor3(3)

//Exercício 11
function calculandoAno(ano){
    let ano2 = ano % 4
    if(ano2 == 0){
        console.log(`O ano ${ano} é bissexto? ${true}`)
    }else{
        console.log(`O ano ${ano} é bissexto? ${false}`)
    }
}
calculandoAno(2025)

//Exercício 12
function fatorial(num){
    if(num < 0){
        return -1
    }else if(num == 0){
        return 1
    }else{
        return (num * fatorial(num - 1))
    }
}

console.log(fatorial(5))

//Exercício 13
function diasUteis(dia){
switch(dia){
    case 1: 
        console.log(`Fim de semana`)
    break;
    case 2: 
    case 3: 
    case 4: 
    case 5: 
    case 6:
        console.log('Dia útil')
    break; 
    case 7: 
        console.log(`Fim de semana`)
    break;
    default:
        console.log(`Dia de semana inválido`)
}
}

diasUteis(10)
diasUteis(6)

//Exercício 14
function vendinha(fruta){
    switch(fruta){
        case 'Maçã':
            console.log('Não vendemos esta fruta aqui')
        break;
        case 'Kiwi':
            console.log('Estamos com escassez de kiwis')
        break;
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo')
        break;
        default: console,log('Erro')

    }
   
}
vendinha('Kiwi')

//Exercício 15
function revendaDeCarros(marca){
    switch(marca){
        case 'hatch': 
        console.log('Compra efetuada com sucesso')
        break;
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes': 
        console.log('Tem certeza que não prefere este modelo?')
        break;
        default: console.log('Não trabalhamos com este tipo de automóvel aqui')
        break;
    }
}

revendaDeCarros('hatch')
revendaDeCarros('motocicletas')
revendaDeCarros('uno')

//Exercício 16
function calculadora(a, b, operacao){
    switch(operacao){
        case '+':
        console.log(a + b)
        break;
        case '-':
        console.log(a - b)
        break;
        case '*':
        console.log(a * b)
        break;
        case '/':
        console.log(a / b)
        break;
    }

}

calculadora(2, 4, '+')
calculadora(2, 4, '-')
calculadora(2, 4, '*')
calculadora(2, 4, '/')

//Exercício 17



