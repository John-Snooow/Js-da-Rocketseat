//Break encerra a execução da repetição ou switch para seguir para a instrução seguinte.

let option = 1;
switch (option) {
  case 1:
    console.log("Cadastrar");
    break;// se eu tirara os break's vai ser imprimido todas a opições no console ou se eu digitar o case 2 ele ira pular o 1 e imprimir o resto
  case 2:
    console.log("Atualizar");
    break;
  case 3:
    console.log("Remover");
    break;
  default:
    console.log("Opção inválida");// Será executado se option não for 1, 2 ou 3
    break;// Encerra o switch após executar o default
}


//Break dentro da estrutura de repetição (para finalizar a repetição)

for (let i = 0; i < 10; i++){
    if (i == 5) break;// O loop é interrompido quando i é igual a 5
}
console.log(i)