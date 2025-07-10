let d;
let N;
let i;
let n;
let resultado;

function pegarValores() {
  resultado = document.querySelector(".resultado");
  d = Number(document.querySelector("#desconto").value);
  i = Number(document.querySelector("#taxa-de-desconto").value / 100);
  N = Number(document.querySelector("#valornominal").value);
  n = Number(document.querySelector("#tempo").value);
}

const desconto = () => {
  d = N * i * n;
  d = d.toFixed(2);
  d = d.replace(".", ",");
  resultado.innerHTML = `<p>Desconto: R$ ${d}</p>`;
};

const taxa = () => {
  i = ((N * n) / d) * 100;
  i = i.toFixed(2);
  i = i.replace(".", ",");
  resultado.innerHTML = `<p>Taxa: ${i}%</p>`;
};

const tempo = () => {
  t = d / (N * i);
  t = t.toFixed(2);
  t = t.replace(".", ",");
  resultado.innerHTML = `<p>Tempo ${t}</p>`;
};

function valorNominal() {
  N = d / (i * n);
  N = N.toFixed(2);
  N = N.replace(".", ",");
  resultado.innerHTML = `<p>Valor nominal: R$ ${N}</p>`;
}

function calcular() {
  pegarValores();
  if (d == 0) {
    desconto();
  } else if (N == 0) {
    valorNominal();
  } else if (i == 0) {
    taxa();
  } else if (n == 0) {
    tempo();
  }
}

function limpar() {
  pegarValores();
  resultado.innerHTML = "Resultado";
  document.querySelector("#desconto").value = "";
  document.querySelector("#taxa-de-desconto").value = "";
  document.querySelector("#tempo").value = "";
  document.querySelector("#valornominal").value = "";
}
