// WHILE: executa até que a repetição seja verdadeira.
let execute = true // Inicializa a variável 'execute' como true para iniciar o loop

// Inicia o loop que continuará enquanto 'execute' for true
while (execute) {
    // Exibe um prompt ao usuário perguntando se deseja continuar
    let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÂO)")

    // Verifica se a resposta do usuário é "2" (NÃO)
    if (response === "2") {
        execute = false // Se a resposta for "2", define 'execute' como false para parar o loop
    }
} // Fim do loop while

// Após o loop, imprime uma mensagem no console indicando que o fluxo continua
console.log("Segue o fluxo...")// Imprime a mensagem no console