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
function aumentarSalarioAtual(tipoPlano, salario){
    switch(tipoPlano){
        case 'A':
            let acrescimoA = (salario * 10) / 100
            let salarioAtualA = salario + acrescimoA 
            console.log(`Sálario antigo ${salario}, salário atual: ${salarioAtualA}`)
        break;
        case 'B':
            let acrescimoB = (salario * 15) / 100
            let salarioAtualB = salario + acrescimoB 
            console.log(`Sálario antigo ${salario}, salário atual: ${salarioAtualB}`)
        break;
        case 'C':
            let acrescimoC = (salario * 20) / 100
            let salarioAtualC = salario + acrescimoC 
            console.log(`Sálario antigo ${salario}, salário atual: ${salarioAtualC}`)
        break;
        default:
            console.log('Plano inválido')
        break;
    }
}

aumentarSalarioAtual('A', 1230)
aumentarSalarioAtual('B', 1230)
aumentarSalarioAtual('C', 1230)
aumentarSalarioAtual('D', 1230)

//Exercício 18
function numeralExtenso(num){
    switch(num){
        case 0:
            console.log('zero')
        break;
        case 1:
            console.log('um')
        break;
        case 2:
            console.log('dois')
        break;
        case 3:
            console.log('três')
        break;
        case 4:
            console.log('quatro')
        break;
        case 5:
            console.log('cinco')
        break;
        case 6:
            console.log('seis')
        break;
        case 7:
            console.log('sete')
        break;
        case 8:
            console.log('oito')
        break;
        case 9:
            console.log('nove')
        break;
        case 10:
            console.log('dez')
        break;
        default: 
        console.log('Número fora do intervalo')
        break;
    }
}
numeralExtenso(18)

//Exercício 19
function lanchonete(quantidade, codigo){
    switch(codigo){
        case 100:
            let precoCachorroQuente = 3.00
            let valorFinalCachorroQuente = quantidade * precoCachorroQuente
            console.log(`Cachorro-Quente: ${quantidade}, preço: R$${valorFinalCachorroQuente} `)
        break;
        case 200:
            let precoHamburguerSimples = 4.00
            let valorFinalHamburguerSimples = quantidade * precoHamburguerSimples
            console.log(`Hambúrguer Simples: ${quantidade}, preço: R$${valorFinalHamburguerSimples} `)
        break;
        case 300:
            let precoCheeseburguer = 5.50
            let valorFinalCheeseburguer = quantidade * precoCheeseburguer
            console.log(`Cheeseburguer: ${quantidade}, preço: R$${valorFinalCheeseburguer} `)
        break;
        case 400:
            let precoBauru = 7.50
            let valorFinalBauru = quantidade * precoBauru
            console.log(`Bauru: ${quantidade}, preço: R$${valorFinalBauru} `)
        break;
        case 500:
            let precoRefrigerante = 3.50
            let valorFinalRefrigerante = quantidade * precoRefrigerante
            console.log(`Refrigerante: ${quantidade}, preço: R$${valorFinalRefrigerante} `)
        break;
        case 600:
            let precoSuco = 2.80
            let valorFinalSuco = quantidade * precoSuco
            console.log(`Suco: ${quantidade}, ${valorFinalSuco} `)
        break;
        default: console.log('Produto não existe')

    }
}

lanchonete(2, 100)

//Exercício 20
/* function imprimirCedulas(valor){
    let notasUtilizadas = []
    for(let quantidade = 0; nota100 = valor; quantidade ){
        console.log(typeOf(nota100))
        if(nota100 <= valor){
            console.log(notasUtilizadas.push = nota100)
      
        }
    }
}

console.log(imprimirCedulas(200)) */

//Exercício 21
function planoDeSaude(idade){
    const valorFixo = 100
    if(idade <= 10){
        const valorTotal = 100 + 80
        console.log(`Valor a ser pago é: R$${valorTotal}`)
    }else if(idade <= 30){
        const valorTotal = 100 + 50
        console.log(`Valor a ser pago é: R$${valorTotal}`)
    }else if(idade <= 60){
        const valorTotal = 100 + 95
        console.log(`Valor a ser pago é: R$${valorTotal}`)
    }else{
        const valorTotal = 100 + 130
        console.log(`Valor a ser pago é: R$${valorTotal}`)
    }
}
planoDeSaude(61)

//Exercício 22

function cobrarJuros(capital, mes){
    switch(mes){
        case 1: 
        //M = C * (1 + i)^t
        const montante1 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante1.toFixed(2).replace('.', ','))
        break;
        case 2: 
        const montante2 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante2.toFixed(2).replace('.', ','))
        break;
        case 3: 
        const montante3 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante3.toFixed(2).replace('.', ','))
        break;
        case 4:
        const montante4 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante4.toFixed(2).replace('.', ',')) 
        break;
        case 5: 
        const montante5 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante5.toFixed(2).replace('.', ','))
        break;
        case 6: 
        const montante6 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante6.toFixed(2).replace('.', ','))
        break;
        case 7: 
        const montante7 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante7.toFixed(2).replace('.', ','))
        break;
        case 8:
        const montante8 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante8.toFixed(2).replace('.', ',')) 
        break;
        case 9: 
        const montante9 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante9.toFixed(2).replace('.', ','))
        break;
        case 10: 
        const montante10 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante10.toFixed(2).replace('.', ','))
        break;
        case 11: 
        const montante11 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante11.toFixed(2).replace('.', ','))
        break;
        case 12: 
        const montante12 = capital * Math.pow((1 + 0.05 * mes), 2) 
        console.log(montante12.toFixed(2).replace('.', ','))
        break;
        
    }
}

cobrarJuros(100, 1)
cobrarJuros(100, 2)
cobrarJuros(100, 12)

//Exercício 23
function calcularMeida(codigoAluno, nota1, nota2, nota3){
    const mediaFinal = ((nota1 * 4) + (nota2 * 3) + (nota3 *3)) / 10

    console.log(`Código aluno: ${codigoAluno}, nota: ${mediaFinal}, status: ${mediaFinal >= 5 ? 'Aprovado' : 'Reprovado' }`)
}

calcularMeida(11, 2, 3, 4)

//Exercício 24
let frase = 0
while(frase < 10){
    frase++
    console.log('Hello World!')
    
}

//Exercício 25
let num = 1

while(num <= 50){
    console.log(num)
    num++
}

//Exercício 26
let num1 = 1

while(num1 <= 100){
    if(num1 % 2 == 0){
        console.log(num1)
        
    }
    num1++
}

//Exercício 27
/* function crescimento(altura1, taxa1, altura2, taxa2){
    let Altura1 = altura1 * 100
    let Altura2 = altura2 * 100
    let Taxa1 = taxa1 * 100
    let Taxa2 = taxa2 * 100

    if(Altura1 < Altura2){
        
        for(let anos = 0; Altura1 == Altura2; anos++){
             Altura1 + Taxa1
            console.log(anos)
        }
        if(Altura2 < Altura1){
            
        }

    }

}

crescimento(1.80, 0.20, 1.90, 0.10) */

//Exercício 28

//Exercício 29
//Exercício 30
//Exercício 31
//Exercício 32
//Exercício 33





