// -------------- Ejercicio 1 --------------

// const string = 'freeCodeCamp'
// let palabra = '';

// const revertir_string = (value) => {
//   console.log(i);
//   if (value < 0) return;
//   palabra += string[value];

//   return revertir_string(value - 1);
// }

// revertir_string(string.length - 1);
// console.log(palabra);

// -------------- Ejercicio 2 --------------

// let contador = 0, bandera = 0;
// let palabra = 'construccion', letra = 'c';

// const recorrer = (n, str, l) => {
//   if (n > str.length - 1) return;
  
//   if (l === str[n]){
//     contador++;
//     bandera = 1;
//   }

//   return recorrer(n + 1, str, l), str, l;
// }

// recorrer(0, palabra, letra)

// if (bandera === 1) {
//   console.log(`En la palabra ${palabra} aparece la letra '${letra}' ${contador} veces.`);
// } else {
//   console.log(`En la palabra ${palabra} no se encuentra la letra '${letra}'`);
// }



// -------------- Ejercicio 3 --------------

// const vocales = 'aeiou',
//       palabra = 'esta es la entrada';

// let nueva_palabra = '';


// let arr = [], repetidos = [], contador = -1;
// const recorrer = (n,vcl, str) => {
//   if (n >= str.length ) return;
//   contador++;
//   arr[contador] = str[contador]
  
//   let i = 0;
//   do {
//     if(vcl[n] === str[i]) {
//       repetidos[contador] = st[i]
//     }
//     i++
//   } while(i < str.length)
  
//   if (arr.length === palabra.length) {
//     console.log(arr);
//     return;
//   }
//   return recorrer(n + 1,vcl, str );
// }
// recorrer(0,vocales, palabra)
