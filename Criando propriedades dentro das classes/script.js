// Definição da classe Product
class Product {
    // Construtor da classe, que recebe um parâmetro 'name'
    constructor(name) {
        // Atribui o valor do parâmetro 'name' à propriedade 'name' da instância
        this.name = name;
    }
}

// Cria uma nova instância da classe Product com o nome "Teclado"
const product1 = new Product("Teclado");
// Exibe o valor da propriedade 'name' da instância product1 no console
console.log(product1.name); // Saída: "Teclado"


const product2 = new Product("Mouse");
console.log(product2.name); 