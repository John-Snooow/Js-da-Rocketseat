/*
    OBJETO
        -Uma coleção de dados e/ou funcionalidades
        -Podem ter propiedades e métodos
*/

//Cria um objeto vasio 
const obj = {}
console.log(obj)
console.log(typeof obj)

//Cria o objeto com propiedades e métodos
//PROPIEDADES
const user = {
    email: "john.jf25@gmail.com",
    age: 28,
    name:{// objeto aninhado
        firstName:"John",
        surName: "Frank",
    },
    address:{// objeto aninhado
        street: "Rua: x",
        numer: 190,
        city: "Buriti",
        postal_code: "64230-000"
    },
  //MÉTODO
  message: function(){
    console.log("Olá, eu sou o John")
  }  
}

//Acessando propiedades e métodos usando a notação de ponto.
console.log(user.email)// quando eu digito o  ponto aparece as opções que estão dentro da "const user".
console.log(user.name.firstName)// acessando o objeto aninhado

//Executa o método do objeto
user.message()

// Temos tambem uma outra opção que é anotação de colchetes
// com a mesma finalidade mas escrita de forma direferent 
console.log(user["email"])
console.log(user["name"]["firstName"])

//Executa o método do objeto
user["message"]()