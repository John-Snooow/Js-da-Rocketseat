let myArray = [
  "Um texto",
  10,
  true,
  function(){
    console.log("Função dentro do Array")
  },
  {
    name: "John"
    email: "johnfrank.jf25@gmail.com"
  },
]
//texto
console.log(myArray[0])

//Número
console.log(myArray[1])

//boolean
console.log(myArray[2])

//função
myArray[3]()//vai executar a função que esta dentro do array

//objeto
console.log(myArray[4].name, myArray[4].email)// vai acessar os dois objetos.