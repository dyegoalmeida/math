document.addEventListener('DOMContentLoaded', () => {

  let btnCalcInt = document.getElementById("btnCalculaInteiro");
  let btnCalcPot = document.getElementById("btnCalculaPotencia");
  let btnCalcCirCirculo = document.getElementById("btnCalculaCirCirculo");
  let btnCalcAreaBaseCubo = document.getElementById("btnCalculaAreaBaseCubo");
  let btnCalcRaizQ = document.getElementById("btnCalculaRaizQ");
  let btnLimparTudo = document.getElementById("btnLimparTudo");

  btnCalcInt.addEventListener('click', calculaFracionado);
  btnCalcPot.addEventListener('click', calculaPotencia);
  btnCalcCirCirculo.addEventListener('click', calculaMedidasCirculo);
  btnCalcAreaBaseCubo.addEventListener('click', calculaAreaBaseCubo);
  btnCalcRaizQ.addEventListener('click', calculaRaizQ);
  btnLimparTudo.addEventListener('click', limparCampos);

});

function limparCampos() {

  const ElementoInput = document.querySelectorAll('input');
  for (var Input of ElementoInput.values()) {
    Input.value = "";
  }

}

function addTextoHTML(texto, valor) {

  return `${texto} ${valor}`;

}

function calculaFracionado() {

  let numFrac = document.getElementById("numFracionado").value;
  let numResult = document.getElementById("numResultInteiro");

  numResult.innerHTML = addTextoHTML("O valor inteiro é: ", retornaInteiro(numFrac));
  numResult.style.display = 'block';

}

function retornaInteiro(num) {

  return Math.round(num);

}

function calculaPotencia() {

  let numX = document.getElementById("numX").value;
  let numY = document.getElementById("numY").value;
  let numResult = document.getElementById("numResultPotencia");

  numResult.innerHTML = addTextoHTML("O valor da operação é: ", retornaPotencia(numX, numY));
  numResult.style.display = 'block';

}

function retornaPotencia(num, potencia) {

  return Math.pow(num, potencia);

}

function calculaMedidasCirculo() {

  let numRaio = document.getElementById("numRaioCirCirculo").value;
  let numResultCirc = document.getElementById("numResultCirCirculo");
  let numResultArea = document.getElementById("numResultAreaCirculo");

  numResultCirc.innerHTML = addTextoHTML("O valor da circunferência é: ", retornaCirCirculo(numRaio));
  numResultArea.innerHTML = addTextoHTML("O valor da Área é: ", retornaRaioAreaCirculo(numRaio));

  numResultCirc.style.display = 'block';
  numResultArea.style.display = 'block';

}

function retornaCirCirculo(num) {

  return 2 * Math.PI * num;

}

function retornaRaioAreaCirculo(num) {

  return Math.PI * Math.pow(num, 2);

}

function calculaAreaBaseCubo() {

  let numAresta = document.getElementById("numArestaCubo").value;

  let numResultAreaBase = document.getElementById("numResultAreaBase");
  let numResultAreaTotal = document.getElementById("numResultAreaTotal");
  let numResultVolume = document.getElementById("numResultVolume");

  let numAreaBaseCubo = retornaAreaBaseCubo(numAresta);

  numResultAreaBase.innerHTML = addTextoHTML("O valor da Área Base é: ", numAreaBaseCubo);
  numResultAreaTotal.innerHTML = addTextoHTML("O valor da Área Total é: ", retornaAreaTotalCubo(numAreaBaseCubo));
  numResultVolume.innerHTML = addTextoHTML("O valor do Volume é: ", retornaVolumeCubo(numAresta));

  numResultAreaBase.style.display = 'block';
  numResultAreaTotal.style.display = 'block';
  numResultVolume.style.display = 'block';

}

function retornaAreaBaseCubo(num) {

  return Math.pow(num, 2);

}

function retornaAreaTotalCubo(num) {

  return num * 6;

}

function retornaVolumeCubo(num) {

  return Math.pow(num, 3);

}

function calculaRaizQ() {

  let numRaizQ = document.getElementById("numRaizQ").value;
  let numResult = document.getElementById("numResultCalcRaizQ");

  numResult.innerText = addTextoHTML("A raiz quadrada de " + numRaizQ + " é:", retornaRaizQ(numRaizQ));
  numResult.style.display = 'block';

}

function retornaRaizQ(num) {

  return Math.sqrt(num);

}