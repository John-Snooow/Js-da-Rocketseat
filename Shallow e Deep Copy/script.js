//# Shallow copy (cópia superficial): não pega os itens aninhados/ Use para propriedades de valores primitivos como string, Number e etc...

const htmlCourse = {
    course: "HTML",
    students: [{name: "John", email:"johnfrank.jf25@gmail.com"}]
}
/*
const jsCourse = {
    ...htmlCourse,
    course:"JavaScript"
}
*/

//Vai modificar o htmlCourse também students é uma referencia e não uma cópia. iria acrescentar nos dois arrays
// jsCourse.students.push({name:"João", email: "joão@gmail.com"})

/*
//#Deep Copy(cópia profunda) Use se quando tem coisas mais complexas como arrays, objetos aninhados e outros
const jsCourse = {
    ...htmlCourse,
    course:"JavaScript",
    students: [...htmlCourse.students, {name:"Maria", email: "Maria@gmail.com"}],//crai uma nova propiedade e não uma referencia, pode ser feito desta maneira ou da maneira que esta logo a baixo
}

jsCourse.students.push({name:"João", email: "joão@gmail.com"})
*/

const jsCourse = {
    ...htmlCourse,
    course:"JavaScript"
}

jsCourse.students = [
    ...htmlCourse.students,
    {name:"Maria", email: "Maria@gmail.com"},
]

console.log(htmlCourse, jsCourse)