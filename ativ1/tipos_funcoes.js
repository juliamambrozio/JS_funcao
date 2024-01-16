//Forma Literal
function Soma(){}

//Armazenar em uma var
const Soma = function(){}

//Armazenar em um Array
const array = [function(){}, Soma()]

//Armazenar em um atributo
const obj = {}
obj.acao = function(){return 'Olá'}

console.log(obj.acao())

//Passar função como parâmetro
function func1(func2){
    func2()
}

func1(function(){console.log('Olá')})

//Retornar função
function Somar(a, b){
    return function Somar2(c){
        console.log(a+b+c)
    }
}

Somar(1,2)(3)