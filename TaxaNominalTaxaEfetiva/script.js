let taxaNominal,taxaEquivalente,periodoTaxanominal,capitalizacao,taxaEfetiva,periodosCapitalizados,resultado;

function pegarValores(){
    taxaNominal = Number(document.querySelector("#taxaNominal").value);
    periodoTaxanominal = Number(document.querySelector("#periodoTaxanominal").value);
    capitalizacao = Number(document.querySelector("#capitalizacao").value);
    capitalizacao = Number(document.querySelector("#capitalizacao").value);
    resultado = document.querySelector("#resultado");
}

function acharTaxaequivalente(){
    taxaEquivalente = (taxaNominal / periodosCapitalizados)/100;
}

function compararPeriodos(){
    if(periodoTaxanominal  > capitalizacao){
        periodosCapitalizados = periodoTaxanominal / capitalizacao;
    }else if(periodoTaxanominal < capitalizacao){
        periodosCapitalizados = capitalizacao / periodoTaxanominal;
    }else{
        periodosCapitalizados = capitalizacao / periodoTaxanominal;
    }
    acharTaxaequivalente();
}

function calcular(){
    taxaEfetiva = (Math.pow(1 + taxaEquivalente,periodosCapitalizados) - 1) * 100;
    taxaEfetiva = taxaEfetiva.toFixed(4);
    taxaEfetiva = taxaEfetiva.replace(".", ",");
}

function principal(){
    pegarValores();
    compararPeriodos();
    calcular();
    if(periodoTaxanominal < 30){
        resultado.innerText = `${taxaEfetiva}% ao Dia`
    }else if(periodoTaxanominal < 60){
        resultado.innerText = `${taxaEfetiva}% ao Més`
    }else if(periodoTaxanominal < 90){
        resultado.innerText = `${taxaEfetiva}% ao Bimestre`
    }else if(periodoTaxanominal < 180){
        resultado.innerText = `${taxaEfetiva}% ao Trimestre`
    }else if(periodoTaxanominal < 360){
        resultado.innerText = `${taxaEfetiva}% ao Semestre`
    }else{
        resultado.innerText = `${taxaEfetiva}% ao Ano`
    }



}


function limpar(){
    resultado.innerText = "Taxa Nominal para Efetiva"
    document.querySelector("#taxaNominal").value = "";
}

cap9itaizacaoNominal = 180
Capitalizaçao = 360
p = cap9itaizacaoNominal/Capitalizaçao;
iN = 12


iE = (iN/p)/100

efetiva = (Math.pow(1+iE,p) - 1) *100

console.log(efetiva)