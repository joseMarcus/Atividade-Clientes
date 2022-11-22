console.log("Exercício")

//Var, Let e Const

//VAR

//Global
var idade = 23;
console.log(idade)
//Local ou de Função
function idades() {
    var idade = 35;
    console.log(idade)
    
}
idades();
console.log(idade)
//Substitui por declaração
var idade = 47;
console.log(idade)
//Atualiza
idade = 57;
console.log(idade)
//Içamento mas sem definição, apenas declaração da variável
console.log(newidade)
var newidade = 100

//LET

//Por Blocos
let numero = 23;
console.log(numero)
//Local ou de Função
function numeros() {
    let numero = 35;
    console.log(numero)
    
}
numeros();
console.log(numero)
//Não substitui por declaração
//let numero = 47;
//console.log(numero)
//Atualiza
numero = 57;
console.log(numero)
//Içamento mas sem definição, nem sequer a declaração da variável
//console.log(newnumero)
//let newnumero = 100

//CONST

//Por Blocos
const casa = 23;
console.log(casa)
//Local ou de Função
function casas() {
    const casa = 35;
    console.log(casa)
    
}
casas();
console.log(casa)
//Não substitui por declaração
//const casa = 47;
//console.log(casa)
//Não Atualiza
//casa = 57;
//console.log(casa)
//Içamento mas sem definição, apenas declaração da variável
//console.log(newcasa)
//const newcasa = 100


//ESPALHAMENTO

const usuarios = [
    {id: 1, nome: 'Marcus', idade: 23},
    {id: 2, nome: 'José', idade: 35},
]
console.log(usuarios)
const novousuario = {id: 3, nome: 'João', idade: 55}

usuarios.push(novousuario)
const final = [...usuarios, novousuario]
console.log(final)