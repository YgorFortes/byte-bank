const graficoDolar =  document.getElementById('graficoDolar');
import selectionaCotacao from "./imprimeCotacao.js";
const graficoParaDolar = new Chart(graficoDolar, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Dólar',
      data: [],
      borderWidth: 1
    }]
  },
});


function gerarHorario(){
  let data = new Date();
  let horario = data.getHours() + ":" +data.getMinutes() + ":" + data.getSeconds();
  return horario;
}


function adionarDados(grafico, legenda, data){
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  })
  grafico.update();
}

let workerDolar = new Worker('./script/workers/workerDolar.js');
workerDolar.postMessage('usd');

workerDolar.addEventListener('message', (evento) => {
  let tempo = gerarHorario();
  let valor = evento.data.ask;
  selectionaCotacao('dolar', valor);
  adionarDados(graficoParaDolar, tempo, valor);
})

//Inserindo grafico para moeda Iene
const graficoIene = document.getElementById('graficoIene');
const graficoParaIene = new Chart(graficoIene, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Iene',
      data: [],
      borderWidth: 1
    }]
  },
});

let workerIene = new Worker('./script/workers/workerIene.js');
workerIene.postMessage('iene');

workerIene.addEventListener('message', (evento) => {
  let tempo = gerarHorario();
  let valor = evento.data.ask;
  adionarDados(graficoParaIene, tempo, valor);
  selectionaCotacao('iene', valor);
})

// Inserindo gráfico para euro 
const graficoEuro = document.getElementById('graficoEuro');
const graficoParaEuro = new Chart(graficoEuro, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Euro',
      data: [],
      borderWidth: 1
    }]
  },
});

let workEuro = new Worker('./script/workers/workerEuro.js');
workEuro.postMessage('euro');

workEuro.addEventListener('message', (evento) => {
  let tempo = gerarHorario();
  let valor = evento.data.ask;
  adionarDados(graficoParaEuro, tempo, valor);
  selectionaCotacao('euro',valor);
})