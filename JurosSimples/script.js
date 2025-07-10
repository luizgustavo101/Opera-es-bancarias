let c;
let i;
let t;
let j;
let resultado;

function pegarValores() {
  resultado = document.querySelector(".resultado");
   c = Number(document.querySelector("#capital").value);
   i = Number(document.querySelector("#taxa").value/100);
   t = Number(document.querySelector("#tempo").value);
   j = Number(document.querySelector("#juros").value);
}

const capital = ()=>{
  c = j/(i*t)
  c = c.toFixed(2);
  c = c.replace(".",',');
  resultado.innerHTML = `<p>Capital: R$ ${c}</p>`;
}

const taxa = ()=>{
  i = (j/(c*t))*100;
  i = i.toFixed(2);
  i = i.replace(".",',');
  resultado.innerHTML = `<p>Taxa: ${i}%</p>`;
}

const tempo = ()=>{
  t = j/(i*c)
  t = t.toFixed(2);
  t = t.replace(".",',');
  resultado.innerHTML = `<p>Tempo ${t}</p>`;
}

function juros(){
  j = c*i*t;
  j = j.toFixed(2);
  j = j.replace(".",',');
  resultado.innerHTML = `<p>Juros: R$ ${j}</p>`;
}


function calcular(){
  pegarValores();
  if(j == 0){
    juros();
  }else if(c == 0){
    capital();
  }else if(i == 0){
    taxa()
  }else if(t == 0){
    tempo();
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