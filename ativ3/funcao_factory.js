function Pessoa(){
    return {
        nome: 'Júlia',
        idade: 18,
        falar: function (){
            console.log('Bom dia!')
        }
    }
}

const pessoa = new Pessoa
pessoa.falar()