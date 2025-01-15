// Definição de uma classe personalizada para erros
class MyCustomError {
    // Construtor da classe que recebe uma mensagem de erro
    constructor(message) {
      // Atribuição da mensagem de erro personalizada
      this.message = "CLASSE DE ERRO COSTUMIZADA: " + message;
    }
  }
  
  // Bloco try-catch para gerenciamento de erros
  try {
    // Lançamento de um erro personalizado
    throw new MyCustomError("Erro personalizado lançado!");
  } catch (error) {
    // Verificação se o erro é uma instancia da classe MyCustomError
    if (error instanceof MyCustomError) {
      // Impressão da mensagem de erro personalizada
      console.log(error.message);
    } else {
      // Impressão de uma mensagem genérica caso o erro não seja personalizado
      console.log("Não foi possível executar!");
    }
  }