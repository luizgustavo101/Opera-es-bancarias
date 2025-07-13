let d,N,i,n,resultado,pTaxa,pTempo,taxaao,tempoem;
const casasDecimais = 2;

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
  d = d.toFixed(casasDecimais);
  d = d.replace(".", ",");
  return d;
};

function taxa(){
  i = (d/(N * n)) * 100;
       if(pTaxa === 1){
    i = i/30
  }else if(pTaxa ===30){
    i = i*1
  }else if(pTaxa === 60){
    i = i*2
  }else if(pTaxa === 90){
    i = i*3;
  }else if(pTaxa === 180){
    i = i*6;
  }else if(pTaxa === 360){
    i = i*12;
    taxaao = "Ao ano";
  } 
  i = i.toFixed(casasDecimais);
  i = i.replace(".", ",");
  return i;
};

function tempo(){
  n = d / (N * i);
     if(pTempo === 1){
    n = n*30;
  }else if(pTempo ===30){
       n = n/1;
  }else if(pTempo === 60){
         n = n/2;
  }else if(pTempo === 90){
    n = n/3;
  }else if(pTempo === 180){
      n = n/6;
  }else if(pTempo === 360){
       n = n/12;
  }
  n = n.toFixed(casasDecimais);
  n = n.replace(".", ",");
  return n;
};

function valorNominal() {
  N = d / (i * n);
  N = N.toFixed(casasDecimais);
  N = N.replace(".", ",");
  return N;
}

function converterTaxa(){
      if(pTaxa === 1){
    taxaao = "Ao dia"
    i = i*30/100
  }else if(pTaxa === 30){
    taxaao = "Ao més";
    i = i/1/100;
  }else if(pTaxa === 60){
    taxaao = "Ao Bimestre";
    i = i/2/100;
  }else if(pTaxa === 90){
    taxaao = "Ao Trimestre";
    i = i/3/100;
  }else if(pTaxa === 180){
    taxaao = "Ao Semestre";
    i = i/6/100;
  }else if(pTaxa === 360){
    i = i/12/100;
    taxaao = "Ao ano";
  } 
  return i;
}

function converterTempo(){
   if(pTempo === 1){
    tempoem = "Dias"
    n = pTempo/30
  }else if(pTempo === 30){
    tempoem = "meses";
    n = pTempo/30;
  }else if(pTempo === 60){
    tempoem = "Bimestres"
    n = pTempo/30
  }else if(pTempo === 90){
    tempoem = "Trimestres"
    n = pTempo/30
  }
  else if(pTempo === 180){
    tempoem = "Semestres"
    n = pTempo/30
  }
  else if(pTempo === 360){
    tempoem = "Anos";
    n = pTempo/30;
  }
 return n;
}

function calcular() {
  pegarValores();


  if (d === 0) {
     converterTaxa();
  converterTempo();
    resultado.innerHTML = `<p>Desconto: R$ ${desconto()}</p>`;
  } else if (N === 0) {
     converterTaxa();
  converterTempo();
    resultado.innerHTML = `<p>Valor Nominal ${valorNominal()} </p>`;
  } else if (i === 0) {
     converterTaxa();
  converterTempo();
    resultado.innerHTML = `<p>Taxa: ${taxa()}% ${taxaao}</p>`;
  } else if (n === 0) {
     converterTaxa();
  converterTempo();
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
