class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    sendEmail(){
        console.log(
            "Email enviado para",
            this.name, 
             "no endereço eletronico",
            this.email
        )
    }
}

const user = new User ("John", "johnfrank.jf25@gmail.com")
user.sendEmail();