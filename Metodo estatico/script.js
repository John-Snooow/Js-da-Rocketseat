//metodos estaticos não podem ser usados coisas do construtor
//o metodo constuctor é ultilizado quando eu instancio a class, e aqui não esta sendo instanciado nada

class User {
    static showMessage(){
        console.log('Essa é uma mensagem!');
    }
}
// Chamada do método estático showMessage diretamente na classe User
User.showMessage()