async function conectaAPI(){
  const conectaAPI = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
  const conectaAPIConvertido = await conectaAPI.json();
  postMessage(conectaAPIConvertido.USDBRL);
}

addEventListener('message', () =>{
  conectaAPI();
  setInterval(() => conectaAPI(), 5000 );
})