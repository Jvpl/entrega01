const primeiroNumero = parseInt(prompt('Escolha um número'));
const segundoNumero = parseInt(prompt('Escolha outro número'));
const diferença = Math.abs(primeiroNumero - segundoNumero);

function maiorNumero(n1,n2,dif){
    if(n1 > n2) {
        return `O maior número é ${n1} e a diferença é ${dif}`
    }else{
        return `O maior número é ${n2} e a diferença é ${dif}`
    }
}

alert(maiorNumero(primeiroNumero, segundoNumero, diferença));