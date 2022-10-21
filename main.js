
// ------------------ Ejercicio 1 ------------------

// const numeros = [1, 4, 15.5, -3, 7, -1, 15];

// const numeros = [-2, -3, -1.5, -4];

// function numero_mayor (num) {
//   let mayor = 0;
//   mayor = num[0]

//   for (let i = 0; i < num.length; i++) {
    
//     if (num[i] > mayor) {
//       mayor = num[i];
//     }
//   }
//   return mayor
// }
// console.log(numero_mayor(numeros));



// ------------------ Ejercicio 2 ------------------

// function palidromo(string) {
//   let palabra_invertida = '', x = '', arreglo = [];
//   x = string;
//   const palabra = x.toLowerCase();

//   for (let i = palabra.length - 1; i >= 0; i--) { 
//     palabra_invertida += arreglo[i] = palabra[i];
//   }
  
//   if (palabra === palabra_invertida) {
//    return `La palabra "${string}" => "${palabra_invertida}" es un palídromo`;
//   } else {
//     return `La palabra "${string}" => "${palabra_invertida}", no es un palídromo.`;
//   }
// }
// console.log(palidromo('Apa'));


// ------------------ Ejercicio 3 ------------------

// const matriz = [ [1,0,0], [0,1,1], [0,1,0] ];

// function encontrar_ceros (num) {
//   let ceros_encontrados = 0;

//   for(let i = 0; i < num.length; i++) {

//     for (let j = 0; j < num.length; j++) {
//       if (num[i][j] === 0) ceros_encontrados++;
//     }
//   }
//   return ceros_encontrados;
// }
// console.log(encontrar_ceros(matriz));



// ------------------ Ejercicio 4 ------------------

// const numeros = [-1, 1, 2, 3, 1, -2, 4, 5, 4, 6, 7, -2, 8, 9, 10, -1, 10];

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


// function encontrar_repetidos(array) {
//   let repetidos = [], bandera = 0;

//   for (let i = 0; i < array.length; i++) {

//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         repetidos.push(array[i])
//         bandera = 1;
//       }
//     }
//   }

//   if (bandera === 0) {
//     return 'No se encontraron números repetidos en la lista de números recibida.';
//   } else {
//     return repetidos;
//   }
// }
// console.log(encontrar_repetidos(numeros));



// ------------------ Ejercicio 5 ------------------

// function piramide(rep) {

//   for (let i = 0; i < rep; i++) {

//     let elemento = '';
//     for (let j = 0; j < i; j++) elemento += '* ';
//     console.log(elemento);

//   }
// }
// piramide(8);
