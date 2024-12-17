function createProduct(name) {
    const product = {};

    product.name = name;
    product.details = function() {
        console.log(`O nome do projeto é ${this.name}`);
    };
    
    return product;
}

const product1 = createProduct("Teclado"); // Removido o 'new'
console.log(product1.name);
product1.details(); // Corrigido para 'details'

const product2 = createProduct("Mouse"); // Removido o 'new'
console.log(product2.name);
product2.details(); // Corrigido para 'details'

// Exemplos de funções construtoras disponíveis no próprio JavaScript
let myName = new String("João");
console.log(myName); // Saída: [String: 'João']

let price = "40.6".replace(".", "");
console.log(price); // Saída: 406

let data = new Date("2014-12-16");
console.log(data); // Saída: 2014-12-16T00:00:00.000Z

function Person(name) {
    this.name = name;
    this.message = function() {
        console.log(`Olá, ${this.name}`);
    };
}

const person1 = new Person("João");
console.log(person1.name);
person1.message();

const person2 = new Person("Maria");
console.log(person2.name);
person2.message();