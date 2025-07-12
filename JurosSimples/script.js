let c,i,t,j,pTaxa,pTempo,resultado,taxaao,tempoem;

function pegarValores() {
  resultado = document.querySelector("#resultado");
   c = Number(document.querySelector("#capital").value);
   i = Number(document.querySelector("#taxa").value);
   t = Number(document.querySelector("#tempo").value);
   j = Number(document.querySelector("#juros").value);
   pTaxa = Number(document.querySelector("#periodoTaxa").value);
   pTempo = Number(document.querySelector("#periodoTempo").value);
}

function capital(){
  c = j/(i*t)
  c = c.toFixed(2);
  c = c.replace(".",',');
  return c;
}

function taxa(){
  i = (j/(c*t))*100;
  if(pTaxa === 12){
    i = i*12
  }
  i = i.toFixed(2);
  i = i.replace(".",',');
  return i;
}

function tempo(){
  t = j/(i*c);
  if(pTempo === 12){
    t = t/12
  }
  t = t.toFixed(2);
  t = t.replace(".",',');
  return t;
}

function juros(){
  j = c*i*t;
  j = j.toFixed(2);
  j = j.replace(".",',');
  return j;
}

function converterTaxa(){
  if(pTaxa === 1){
    taxaao = "Ao més";
    i = i/100;
  }else if(pTaxa === 12){
    i = i/12/100;
    taxaao = "Ao ano";
  } 
  return i;
}

function converterTempo(){
  if(pTempo === 1){
    tempoem = "meses";
    t = t/1;
  }else if(pTempo === 12){
    tempoem = "Anos";
    t = 12*t;
  }
  return t;
}

function calcular(){
pegarValores();
converterTaxa();
converterTempo();

  if(j === 0){
    resultado.innerHTML = `<p>Juros R$ ${juros()}</p>`;
  }else if(c === 0){
    resultado.innerHTML = `<p>Capital R$ ${capital()}</p>`;
  }else if(i === 0){
    resultado.innerHTML = `<p>Taxa: ${taxa()}% ${taxaao}</p>`;
  }else if(t === 0){
    resultado.innerHTML = `<p>Tempo: ${tempo()} ${tempoem}</p>`;
  }
}

function limpar() {
  pegarValores();
  resultado.innerHTML = 'Resultado';
  document.querySelector("#capital").value = "";
  document.querySelector("#taxa").value = "";
  document.querySelector("#tempo").value = "";
  document.querySelector("#juros").value ="";
}