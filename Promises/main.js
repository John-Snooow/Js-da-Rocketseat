//Função que retorna uma promise
function asyncFunction() {
  return new Promise((resolve, reject) => {
    //simula um operação assíncrona.
    setTimeout(() => {// para criar um delay
      const isSuccess = true;// alterni para "false" para visualizar o resultado no console

      if (isSuccess) {
        resolve("Operação realizada com sucesso!");
      } else {
        reject("Operação falhou");
      }
    }, 3000);//Simula um operação que leva 3s
  });
}

//Visualiza que o retorno é uma promise.
// console.log(asyncFunction());

console.log("Execultando função assincrona...")
asyncFunction()
.then((response)=>{
    console.log("Sucesso: ", response);
})
.catch((error)=>{
    console.log("Erro: ", error);
})
.finally(()=>{
    console.log("Operação finalizada");
})