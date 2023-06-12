async function conectaAPI(){
  const conectaAPI = await fetch('https://economia.awesomeapi.com.br/last/JPY-BRL');
  const conectaAPIConvertido = await conectaAPI.json();
  postMessage(conectaAPIConvertido.JPYBRL)
}

addEventListener('message', () => {
  conectaAPI();
  setInterval(() => conectaAPI(), 5000);
})