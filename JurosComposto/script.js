let c,i,t,m,pTaxa,pTempo,resultado,taxaao,tempoem;
const casasDecimais = 2;

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
  c = c.toFixed(casasDecimais);
  c = c.replace(".",',');
  return c;
}

function taxa(){
  i = (Math.pow(m/c, 1 / t) - 1)*100 ;
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
  i = i.replace(".",',')
  return i; 
}

function tempo(){
  t = (Math.log(m/c) / Math.log(1 + i))
    if(pTempo === 1){
    t = t*30;
  }else if(pTempo ===30){
       t = t/1;
  }else if(pTempo === 60){
         t = t/2;
  }else if(pTempo === 90){
    t = t/3;
  }else if(pTempo === 180){
      t = t/6;
  }else if(pTempo === 360){
       t = t/12;
  } 
  t = t.toFixed(casasDecimais);
  t = t.replace(".",',');
  return t;
}

function montante(){
  m = c*Math.pow(1+i,t);
  m = m.toFixed(casasDecimais);
  m = m.replace(".",',');
  return m;
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
    t = pTempo/30
  }else if(pTempo === 30){
    tempoem = "meses";
    t = pTempo/30;
  }else if(pTempo === 60){
    tempoem = "Bimestres"
    t = pTempo/30
  }else if(pTempo === 90){
    tempoem = "Trimestres"
    t = pTempo/30
  }
  else if(pTempo === 180){
    tempoem = "Semestres"
    t = pTempo/30
  }
  else if(pTempo === 360){
    tempoem = "Anos";
    t = pTempo/30;
  }
 return t;
}

function calcular(){
  pegarValores();
  if(c === 0){
  converterTaxa();
  converterTempo();
      resultado.innerHTML = `<p>Capital: R$ ${capital()}</p>`;
  }else if(i === 0){
  converterTaxa();
  converterTempo();
     resultado.innerHTML = `<p>Taxa: ${taxa()}% ${taxaao}</p>`;
  }else if(t === 0){
  converterTaxa();
  converterTempo();
      resultado.innerHTML = `<p>Tempo: ${tempo()} ${tempoem}</p>`;
  }else if(m === 0){
  converterTaxa();
  converterTempo();
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