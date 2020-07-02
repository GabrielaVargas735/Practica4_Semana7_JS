let numeros = parseInt(prompt('Ingrese la cantidad de nombres que desea listar'));
let lista_numeros = [];

for (let i = 0; i < numeros; i++) {
    let numero = prompt('Ingrese un nombre para el indice ' + (i + 1));
    lista_numeros.push(numero);
}

console.log(lista_numeros);