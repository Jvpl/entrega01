
// -------------------Exércicios de manipulação de dados ----------

/*

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

//======================== // ===========================

*/

/* 

const primeiroNumero = parseFloat(prompt('Escolha um número'));
const segundoNumero = parseFloat(prompt('Escolha outro número'));

function maiorNumero(n1,n2){
    if(isNaN(n1) || isNaN(n2)){return `Número inválido`;}
    else if(n1 > n2) {return `O número ${n1} é maior que o número ${n2}`;}
    else if(n2 > n1) {return`O número ${n2} é maior que o número ${n2}`;}
    else{return `Números iguais`;}
}

alert(maiorNumero(primeiroNumero, segundoNumero));

//======================== // ===========================

*/


/* 

const salario = parseFloat(prompt('Qual é o seu salário?'));
const emprestimo = parseFloat(prompt('De quanto você precisa?'));
const condicao = (salario * 0.30).toFixed(2);

function analiseEmprestimo(emprestimo, condicao) {
    if (emprestimo <= condicao) {
        return 'Emprestimo aprovado';
    } else {
        return `Emprestimo não aprovado`;
    }
}

alert(analiseEmprestimo(emprestimo, condicao));

//======================== // ===========================

*/

/* 

const valor = parseInt(prompt('Qual é o valor?'));
console.log(typeof (valor));

function filter(valor) {
    if (isNaN(valor)) {
        return `Valor inválido`;
    }
    else if (valor % 3 === 0 && valor % 5 === 0) {
        return `Valor inválido`;
    }
    else if (valor % 3 === 0) {
        return 'Valor divisível por 3';
    }
    else if (valor % 5 === 0) {
        return 'Valor divisível por 5';
    }
    else if (valor % 2 === 0) {
        return 'É par';
    } else {
        return 'É impar';
    }
}

alert(filter(valor));

//======================== // ===========================

*/

/*
const dia = parseInt(prompt('Digite um número de 1 a 7'));
function diasDaSemana(dia){
    if(dia === 1) return 'Domingo'
    if(dia === 2) return 'Segunda'
    if(dia === 2) return 'Terça'
    if(dia === 3) return 'Quarta'
    if(dia === 4) return 'Quinta'
    if(dia === 5) return 'Sexta'
    if(dia === 6) return 'Sabado'
    else {return 'erro'}
}

alert(diasDaSemana(dia));

//======================== // ===========================

*/

/*
const salarioAtual = parseFloat(prompt('Qual é o seu salário atual?'));
const reajuste = parseFloat(prompt('Quantos % será seu reajuste?'));
const porcentagem = reajuste / 100;

function salarioReajustado(salario, r) {
    const valorReajustado = salario * r;
    const novoSalario = salario + valorReajustado;

    if (r > 0.05) return 'Reajuste inválido';

    return `O salário do funcionário foi reajustado para ${novoSalario}`

}

alert(salarioReajustado(salarioAtual, porcentagem));


//======================== // ===========================

*/

/*
const dolar = parseFloat(prompt('Valor em dolar'));
const cotacao = parseFloat(prompt('Valor da cotação?'));
const real = parseFloat((dolar * cotacao).toFixed(2));

const dolarFormatado = dolar.toFixed(2);
const realFormatado = real.toFixed(2);

alert(`$${dolarFormatado} é equivalente a R$${realFormatado} tendo ${cotacao} como cotação`);

//======================== // ===========================

*/


/*

const praga = parseInt(prompt("Qual praga você deseja eliminar: 1 - ervas daninhas 2 - Garfanotos 3 - Broca 4 - Todos acima"));
const area = parseInt(prompt("Qunatos acres serão pulverizados?"));

function calculoPreco(praga, acres) {
    const tiposDePragas = {
        1: 'ervas daninhas', 2: 'gafanhotos', 3: 'broca', 4: 'todos acima'
    };

    const tipo = tiposDePragas[praga];
    let area = acres;
    let preco;
    if (tipo === 'ervas daninhas') preco = 50 * area;
    else if (tipo === 'gafanhotos') preco = 100 * area;
    else if (tipo === 'broca') preco = 150 * area;
    else if (tipo === 'todos acima') preco = 250 * area;

    return calcularPrecoComDesconto(acres, preco);

}

function calcularPrecoComDesconto(area, preco) {
    let desconto;
    if (area > 1000) {
        desconto = preco - (0.05 * preco);
        return `O valor a ser pago é de: R$ ${desconto.toFixed(2)}`;
    }
    else if (preco > 750) {
        desconto = preco - (0.1 * (preco - 750));
        return `O valor a ser pago é de: R$ ${desconto.toFixed(2)}`;

    }
}

const precoFinal = calculoPreco(praga, area);
alert(precoFinal);

//======================== // ===========================

*/

/*

const tempo = parseInt(prompt('Quanto tempo você está viajando?'));
const velocidade = parseInt(prompt('Qual é a sua velocidade?'));
const distancia = tempo * velocidade;
const litrosGastos = distancia / 12;

const resultado = `Seu veículo percorreu ${distancia.toFixed(2)} Km a ${velocidade} Km/h em ${tempo}h de viagem e consumiu ${litrosGastos.toFixed(2)}l de gasolina.`;

alert(resultado);

//======================== // ===========================

*/

/*

const valor = parseFloat(prompt('Digite o valor da prestação:'));
const taxa = parseFloat(prompt('Digite a taxa de atraso (%):'));
const tempo = parseFloat(prompt('Digite o tempo de atraso:'));

if (tempo <= 0 || tempo % 1 !== 0) {
    alert('Valor inválido. O tempo de atraso deve ser em dias.');
} else {
    const prestacao = valor + (valor * (taxa / 100) * tempo);
    alert(`R$ ${prestacao.toFixed(2)}`);
}

//======================== // ===========================

*/