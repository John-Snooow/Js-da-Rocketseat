let obj = [17]
let index = 300
try{
  // obj.execute()

  if(!obj.includes(17)){
    throw new Error("o número 17 não esta disponivel")
  }

  if(index>99){
    throw new RangeError(
      "Numero esta fora do intervalo. Escolha um número de 0 à 99."
    )
  }
}catch(error){
  if (error instanceof TypeError){
    console.log("Metodo indisponivel.")
  }

  if(error instanceof RangeError){
    console.log(error.message)
  }
  // console.log(error)
}