// O Strict mode (modo estrito: ativando esse modo, os erros que eram silencosos passam a gerar exeções no javascript.)

// 'use strict'; quando ultilizado ele vai acuzar um erro a cada codigo aqui em baixo tornado ele estritos, alguns nem vai aparecer no console 
//mas se eu deixar o "use strict" cometado o codigo vai aparecer no console
"use strict"

function showMenssage(){
  let personName = "John Frank"

  console.log("Ola", personName)
}

showMenssage()

class Student {
  get point(){
    return 7
  }
}

let student = new Student()
//tenta mudar uma propiedade somente leitura.
// student.pointer = 10 

console.log(student.point)

//Tenta deletar uma propiedade de um objeto que não posso deletar 
// delete window.document


//quando passamos parametros duplicados
//             3+3+2=8
function sum (a, a, c){
  return a + a + c
}

// aqui ocorre uma pegadinha 
//                 3 3 2
const result = sum(1,3,2)// vai somar da seguinte maneira 3+3+2=8 pois no sum a cima um dos "a" assume o valor do outro "a" que é 3 
console.log("RESULTADO", result)