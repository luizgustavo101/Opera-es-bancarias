let c,i,t,m,pTaxa,pTempo,resultado,taxaao,tempoem;

function pegarValores() {
  resultado = document.querySelector("#resultado");
  c = Number(document.querySelector("#capital").value);
  i = Number(document.querySelector("#taxa").value);
  t = Number(document.querySelector("#tempo").value);
  m = Number(document.querySelector("#montante").value);
  pTaxa = Number(document.querySelector("#periodoTaxa").value);
  pTempo = Number(document.querySelector("#periodoTempo").value);
}


function capital(){
  c = m/Math.pow(1+i,t);
  c = c.toFixed(2);
  c = c.replace(".",',');
  return c;
}

function taxa(){
  i = (Math.pow(m/c, 1 / t) - 1)*100 ;
  if(pTaxa === 12){
    i = i*12;
  }
  i = i.toFixed(2);
  i = i.replace(".",',')
  return i; 
}

function tempo(){
  t = (Math.log(m/c) / Math.log(1 + i))
  if(pTempo === 12){
    t = t/12
  }
  t = t.toFixed(2);
  t = t.replace(".",',');
  return t;
}

function montante(){
  m = c*Math.pow(1+i,t);
  m = m.toFixed(2);
  m = m.replace(".",',');
  return m;
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
    t = t/1;
  }else if(pTempo === 12){
    tempoem = "Anos";
    t = t*12;
}
 return t;
}

function calcular(){
  pegarValores();
  converterTaxa();
  converterTempo();

  if(c === 0){
      resultado.innerHTML = `<p>Capital: R$ ${capital()}</p>`;
  }else if(i === 0){
     resultado.innerHTML = `<p>Taxa: ${taxa()}% ${taxaao}</p>`;
  }else if(t === 0){
      resultado.innerHTML = `<p>Tempo: ${tempo()} ${tempoem}</p>`;
  }else if(m === 0){
      resultado.innerHTML = `<p>Montante:  R$ ${montante()}</p>`;
  }
}

  function limpar() {
    resultado.innerHTML = 'Juro Composto';
    document.querySelector("#capital").value = "";
    document.querySelector("#taxa").value = "";
    document.querySelector("#tempo").value = "";
    document.querySelector("#montante").value = "";
  }