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
        resultado.innerText = `${taxaEfetiva}% Efetiva ao Dia`
    }else if(periodoTaxanominal < 60){
        resultado.innerText = `${taxaEfetiva}% Efetiva ao Més`
    }else if(periodoTaxanominal < 90){
        resultado.innerText = `${taxaEfetiva}% Efetiva ao Bimestre`
    }else if(periodoTaxanominal < 180){
        resultado.innerText = `${taxaEfetiva}% Efetiva ao Trimestre`
    }else if(periodoTaxanominal < 360){
        resultado.innerText = `${taxaEfetiva}% Efetiva ao Semestre`
    }else{
        resultado.innerText = `${taxaEfetiva}% Efetiva ao Ano`
    }
}

function limpar(){
    resultado.innerText = "Taxa Nominal para Efetiva"
    document.querySelector("#taxaNominal").value = "";
}