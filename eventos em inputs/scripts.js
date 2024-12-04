const input = document.querySelector("input")


/*
//Keudown - quando uma tecla é pressionada (capitura tudo, obiserve no console como CTRL, SHIFT, etc)
input.addEventListener("keydown", (event) =>{
    console.log(event.key) 
})
*/

//outro evento 
//Keypress - é disparada quando uma tecla do tipo caracter é pressionada(letras, pontos, numeros, ele ignora CTRL, SHFT etc..)

input.addEventListener("keypress", (event)=>{
    console.log(event.key)
})

// aqui temos um evento que vai ser disparado toda vez que eu clicar fora do input
// blur - quando o foco sai do input
input.onchange = () =>{
    console.log("O INPUT MUDOU!")
}

//ou posso fazer desta forma abaixo que vai funcionar da mesmo jeito

/*
input.onchange = () =>{
    inputChange()
}

function inputChange(){
    console.log("O INPUT MUDOU!")
}

*/
