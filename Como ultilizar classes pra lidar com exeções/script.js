// Defina um array com um único elemento, o número 17
let obj = [17]

// Defina uma variável index com o valor 300
let index = 300

// Bloco try-catch para lidar com exceções e erros
try {
  // Essa linha está comentada, mas se fosse executada, lançaria uma exceção TypeError
  // porque o array obj não tem um método chamado execute()
  // obj.execute()

  // Verifique se o número 17 está incluído no array obj
  if (!obj.includes(17)) {
    // Se o número 17 não estiver incluído, lance uma exceção do tipo Error
    throw new Error("o número 17 não está disponível")
  }

  // Verifique se o valor de index é maior que 99
  if (index > 99) {
    // Se o valor de index for maior que 99, lance uma exceção do tipo RangeError
    throw new RangeError("Número está fora do intervalo. Escolha um número de 0 à 99.")
  }
} catch (error) {
  // Verifique o tipo de exceção lançada
  if (error instanceof TypeError) {
    // Se a exceção for do tipo TypeError, imprima uma mensagem de erro
    console.log("Método indisponível.")
  } else if (error instanceof RangeError) {
    // Se a exceção for do tipo RangeError, imprima a mensagem de erro
    console.log(error.message)
  } else {
    // Se a exceção for de outro tipo, imprima a exceção
    console.log(error)
  }
}