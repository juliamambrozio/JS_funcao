//CALL E APPLY: aplicando valores a uma function

//SEM USAR CALL E APPLY

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 1000,
    imposto: 1,
    desc: 10,
    getPreco
}

console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 45000,
    imposto: 10,
    desc: 10
}

//OS DOIS FAZEM A MESMA COISA, PORÉM SE ESCREVE DIFERENTE A FORMA DE PASSAR PARÂMETROS
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))

