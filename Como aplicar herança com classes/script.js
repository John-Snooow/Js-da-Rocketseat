
class Animal {//A classe Animal define um comportamento básico (nome e método makeNoise).
    constructor(name) {
        this.name = name
    }

    makeNoise(){
        console.log("Esta latindo com alguem");
    }
}

class Dog extends Animal{//A classe Dog herda esse comportamento sem adicionar nada novo.
//aqui não tem nada
}

/*
Ao criar uma instância de Dog, o nome é passado para o construtor de Animal.
O método makeNoise é chamado e executa a ação definida na classe Animal.
*/
const dog = new Dog("Ralfi")
console.log(dog.name)
dog.makeNoise()

