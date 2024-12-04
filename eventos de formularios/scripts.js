const form = document.querySelector("form")

form.onsubmit = (event) =>{
    event.preventDefault()
    console.log("Você fez um submite no formularioa #1")
}

form.onsubmit = (event) =>{
    event.preventDefault()
    console.log("Você fez um submite no formularioa #2")
}

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log("Você fez um submite no formularioa #3")
})

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log("Você fez um submite no formularioa #3")
})

/*
OBS: aqui eu fiz 4 funções para mostrar a diferença entre colocar apenas o "form.onsubimit" e colocar o "form.addEventListener" sendo que os dois tipos aqui fazem basicamente a mesma função, obiserve que os dois primeiros e os dois ultimos são iguais, mais quando for abrir o inspecionador na web note que "#1" não aparece no console, isso porque o "form.onsubimit" só vai pegar apenas o ultimo "onsubimit" e fazer a chamada "
*/