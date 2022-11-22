const pessoa = {
    id: 1,
    nome: "Marcos",
    nascimento: "2022-09-21"
}
//var escopo global
//let icamento de escopo global
//const não muda e fica constante, imutável
const {id, nome, nascimento} = pessoa;

console.log(id);



let lista1 = [1, 2, 3, 4];
//let lista2 = lista1;
let lista2 = [];
//lista2[4] = 5;
//lista2.push(5);
console.log(lista2);
console.log(lista1);    

//Montar a segunda lista adicionando 1 a 1 o valor da segunda lista
//1 Iterar nos valores lista1
//Adicionar os valores individualmente na lista 2




for (let item of lista1){
    lista2.push(item);
   
} 

//Rest ou espreed oparation
lista2 = [...lista1];
lista2.push(5);


    //Opção 1(por referência) |Opção 2(por valores)
console.log(lista1);//[1,2,3,4,5,6]             [1,2,3,4]
console.log(lista2);//[1,2,3,4,5,6]             [1,2,3,4,5]





