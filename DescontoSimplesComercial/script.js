let d,N,i,n,resultado,pTaxa,pTempo,taxaao,tempoem;

function pegarValores() {
  resultado = document.querySelector("#resultado");
  d = Number(document.querySelector("#desconto").value);
  N = Number(document.querySelector("#valorNominal").value);
  i = Number(document.querySelector("#taxaDesconto").value);
  n = Number(document.querySelector("#tempo").value);
  pTaxa = Number(document.querySelector("#periodoTaxa").value);
  pTempo = Number(document.querySelector("#periodoTempo").value);
}

function desconto(){
  d = N * i * n;
  d = d.toFixed(2);
  d = d.replace(".", ",");
  return d;
};

function taxa(){
  i = (d/(N * n)) * 100;
   if(pTaxa === 12){
    i = i*12
  }
  i = i.toFixed(2);
  i = i.replace(".", ",");
  return i;
};

function tempo(){
  n = d / (N * i);
   if(pTempo === 12){
    n = n/12
  }
  n = n.toFixed(2);
  n = n.replace(".", ",");
  return n;
};

function valorNominal() {
  N = d / (i * n);
  N = N.toFixed(2);
  N = N.replace(".", ",");
  return N;
}

function converterTaxa(){
  if(pTaxa === 1){
    taxaao = "Ao més";
    i = i/100;
  }else if(pTaxa === 12){
    taxaao = "Ao ano";
    i = (i/12)/100;
  } 
  return i;
}

function converterTempo(){
  if(pTempo === 1){
    tempoem = "meses";
    n = n/1;
  }else if(pTempo === 12){
    tempoem = "Anos";
    n = n*12;
}
 return n;
}

function calcular() {
  pegarValores();
  converterTaxa();
  converterTempo();


  if (d === 0) {
    resultado.innerHTML = `<p>Desconto: R$ ${desconto()}</p>`;
  } else if (N === 0) {
    resultado.innerHTML = `<p>Valor Nominal ${valorNominal()} </p>`;
  } else if (i === 0) {
    resultado.innerHTML = `<p>Taxa: ${taxa()}% ${taxaao}</p>`;
  } else if (n === 0) {
    resultado.innerHTML = `<p>Tempo ${tempo()} ${tempoem}</p>`;
  }
}

function limpar() {
  document.querySelector("#resultado").innerHTML = "Desconto Comercial";
  document.querySelector("#desconto").value = "";
  document.querySelector("#taxa-de-desconto").value = "";
  document.querySelector("#tempo").value = "";
  document.querySelector("#valornominal").value = "";
}
