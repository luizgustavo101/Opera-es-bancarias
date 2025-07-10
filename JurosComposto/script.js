let c;
let i;
let t;
let m;
let resultado;

function pegarValores() {
  resultado = document.querySelector(".resultado");
   c = Number(document.querySelector("#capital").value);
   i = Number(document.querySelector("#taxa").value/100);
   t = Number(document.querySelector("#tempo").value);
   m = Number(document.querySelector("#montante").value);
}

const capital = ()=>{
  c = m/Math.pow(1+i,t);
  c = c.toFixed(2);
  c = c.replace(".",',');
  resultado.innerHTML = `<p>Capital: R$ ${c}</p>`;
}

const taxa = ()=>{
  i = (Math.pow(m/c, 1 / t) - 1)*100 ;
  i = i.toFixed(2);
  i = i.replace(".",',')
  resultado.innerHTML = `<p>Taxa: ${i}%</p>`;
}

const tempo = ()=>{
  t = Math.log(m/c) / Math.log(1 + i)
  t = t.toFixed(2);
  t = t.replace(".",',');
  resultado.innerHTML = `<p>Tempo ${t}</p>`;
}

function montante(){
  m = c*Math.pow(1+i,t);
  m = m.toFixed(2);
  m = m.replace(".",',');
  resultado.innerHTML = `<p>Montante: R$ ${m}</p>`;
}


function calcular(){
  pegarValores();
  if(c == 0){
    capital();
  }else if(i == 0){
    taxa()
  }else if(t == 0){
    tempo();
  }else if(m == 0){
    montante();
  }
}

  function limpar() {
    resultado.innerHTML = 'Resultado';
    document.querySelector("#capital").value = "";
    document.querySelector("#taxa").value = "";
    document.querySelector("#tempo").value = "";
    document.querySelector("#montante").value = "";
  }