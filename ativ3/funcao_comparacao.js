//Class

class Pessoa{
    constructor(nome){ //Construindo meu objeto
        this.nome = nome 
    }

    falar = function(){
        console.log(`Olá, eu sou a ${this.nome}`) //precisa do This para referenciar a pessoa
    }
}

const pessoa1 = new Pessoa('Júlia')
pessoa1.falar()

//Factory

function Pessoa(nome){
    return {
        nome: nome,

        falar: function(){
            console.log(`Olá, eu sou a ${nome}`) //não precisa do this para referenciar a Pessoa
        }
    }
}

const pessoa2 = new Pessoa('Júlia')
pessoa2.falar()


//Construtora
function Pessoa(nome){
    this.falar = function() {
        console.log(`Olá, eu sou a ${nome}`) //não precisa do this para referenciar a Pessoa
    }
}

const pessoa3 = new Pessoa('Júlia')
pessoa3.falar()