const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

//const falar = pessoa.falar
//falar() //aqui ocasiona em um erro, porque ele não está referenciando o this à pessoa

const FalarDePessoa = pessoa.falar.bind(pessoa) //o bind é um atributo que amarra o this ao objeto
FalarDePessoa()

function Pessoa(){
    this.idade = 0

    const self = this //está referenciando diretamente a Pessoa, porque não está dentro de uma function, funciona como o bind

    setInterval(function(){
        self.idade++
        console.log(self.idade)
        //console.log(self)
    }/*.bind(this)*/), 5000

}

new Pessoa
