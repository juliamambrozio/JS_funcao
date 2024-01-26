//Função construtora, utilizada quando quero usar o mesmo modelo várias vezes

function ControleRemoto(volMaximo = 100, volMinimo = 0){
    //Criando variável privada
    let volAtual = 0

    //função pública (graças ao this)
    this.aumentarVolume = function(){
        if(volMinimo + volAtual <= volMaximo){
            volAtual += 1
        }else{
            volAtual = volMaximo
        }
    }

    this.diminuirVolume = function(){
        if(volMinimo + volAtual <= volMaximo){
            volAtual -= 1
        }else{
            volAtual = volMaximo
        }
    }

    this.getVolAtual = function(){
        return volAtual
    }

    
}

let controle = new ControleRemoto
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
controle.diminuirVolume()
console.log(controle.getVolAtual())