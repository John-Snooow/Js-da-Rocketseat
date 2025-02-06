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
/*
async function fetch(){
  const response = await asyncFunction();
  console.log(response);
}
*/
//ou pode ser feito da forma de baixo
/*
const fetch = async() =>{
  const response = await asyncFunction();
  console.log(response)
}
*/
//ou pode ser feito da forma de try catch

const fetch = async() =>{
  try{
    const response = await asyncFunction();
    console.log("Sucesso: ", response)
  }catch (error){
    console.log("Erro: ", error)
  }finally{
    console.log("Fim da execução")
  }
  
}

fetch()