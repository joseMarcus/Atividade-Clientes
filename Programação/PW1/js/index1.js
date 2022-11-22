import {somar, subtrair} from "./operacoesaritmeticas.js";

let resultado = somar(1, 2);

console.log(resultado);

resultado = subtrair(7, 2);
console.log(resultado);


var a, b, rest;

console.log(a);
let numeros = [1, 2, 5, 6, 7];
[a, b, ...rest] = numeros;

console.log(a);
console.log(b);
//Substituição simples
[a, b] = [b, a];
console.log(rest);

resultado = somar(...rest);
console.log(resultado);

let pessoa = {
    "nome": "João",
    "email": "joão@gmail.com",
    "nascimento": "2022-07-01",
    "peso": "59"
};

let {nome, email, ...resto} = pessoa;
console.log(nome);
console.log(email);
console.log(resto);



