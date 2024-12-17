// Definindo um objeto 'user' que contém informações sobre um usuário
const user = {
    id: 1, // ID do usuário
    name: 'João', // Nome do usuário
    address: { // Objeto aninhado que contém o endereço do usuário
        street: "Avenida Brsil", // Rua do endereço
        city: "São paulo", // Cidade do endereço
        geo: { // Objeto aninhado que contém informações geográficas
            latitude: 47.808, // Latitude da localização
            longitude: 17.5674, // Longitude da localização
        },
    },
    // Método que exibe uma mensagem de saudação no console
    message: function() {
        console.log(`Olá, ${this.name}!`)// imprime no console o "Olá João" pois esta fazendo uma entipolação  
    },
}

// Usando o encadeamento opcional para acessar propriedades do objeto 'user'
console.log(user?.address) // Exibe o objeto 'address' se 'user' não for null ou undefined
console.log(user?.address?.street) // Exibe a rua se 'address' não for null ou undefined

// Usando o encadeamento opcional para chamar o método charAt() no nome do usuário
user.name?.charAt() // Isso tentará chamar charAt() no nome 'João', mas não especifica um índice, então não fará nada visível


