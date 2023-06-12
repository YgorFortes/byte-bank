async function conectaAPI(){
  const conectaAPI = await fetch('https://economia.awesomeapi.com.br/last/EUR-BRL');
  const conectaAPIConvertido = await conectaAPI.json();
  postMessage(conectaAPIConvertido.EURBRL);
}

addEventListener('message', () => {
  conectaAPI();
  setInterval(() => conectaAPI(), 5000);
});