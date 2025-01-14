class Animal {
  //A classe Animal define um comportamento básico (nome e método makeNoise).
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    //metodo
    console.log("Esta latindo com alguem");
  }
}

class Dog extends Animal {
  //A classe Dog herda esse comportamento da classe Animal sem adicionar nada novo.
  makeNoise() {
    console.log("woof..! woof...!");
  }
}
/*
Ao criar uma instância de Dog, o nome é passado para o construtor de Animal.
O método makeNoise é chamado e executa a ação definida na classe Animal.
*/
const dog = new Dog("Ralfi");
console.log(dog.name);
dog.makeNoise();

class Cat extends Animal {
  makeNoise() {
    console.log("Meowwwwwwwwwwwwwwwwwwwwwwwwwwwww...!");
  }

  run() {
    console.log("correndo");
  }
}
const cat = new Cat("Mel");
console.log(cat.name);
cat.makeNoise();

cat.run();