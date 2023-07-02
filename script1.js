
// function comparaNumeros(a, b){
//     if (a >= b) return console.log(`${a} es mayor o igual que ${b}`);
//     return console.log( `${a} es menor que ${b}`);
// }
// comparaNumeros(5, 9)



// let drinkCoffee = 0

// while (drinkCoffee < 10) {
//   drinkCoffee = drinkCoffee + 1
  
//   if (drinkCoffee === 8) { break }
//   if (drinkCoffee === 5) { continue }

//   console.log('Café')
// }

// let respuesta

// do {
//   respuesta = confirm("¿Te gusta JavaScript?");
// } while (respuesta)

// for (let i = 0, j = 5; i < 5; i++, j--) {
//     console.log(i, j);
// }
  
// const dia = "lunes"

// switch (dia) {
//   case "lunes":
//     console.log("¡Hoy es lunes! 😢")
//     break

//   default:
//     console.log("No es lunes, YAY! 🚀")
//     break
// }

// function cuentaAtras(numero) {
//     // Condición base: Si el número que recibe es
//     // menor de 0 entonces salimos de la función
//     if (numero < 0) { return }
  
//     // Si el número era mayor o igual a 0, lo mostramos
//     console.log(numero)
  
//     // Y llamamos a la función con el número anterior
//     cuentaAtras(numero - 1)
// }
// cuentaAtras(3)

// function recursive(n) {
//     if (n === 0) {
//       return 0
//     } else {

//       return n + recursive(n - 1)
//     }
// }
// recursive(3)

// function sumarPares(numeros) {
//     let suma = 0
//     for (const num of numeros) {
//         if (num % 2 === 0) { suma = suma + num }
//     }
    
//     return console.log(suma)
// }
// sumarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// let str = 'To be, or not to bea, that is the question.'

// console.log(str.endsWith('question.a'))  // true
// console.log(str.endsWith('to be'))      // false
// console.log(str.endsWith('to bea', 20))  // true

function acabanEnA(words) {
    const todasEnA = words.every(word => word.endsWith('a'))
    console.log(todasEnA)
}
acabanEnA(['patata', 'salmorejo', 'movil', 'ordena', 'carpeta', 'cuadra'])
  
function sortAbsoluteNumbers(numbers) {
    numbers.sort(function (a, b) { return Math.abs(a) - Math.abs(b) })
    console.log(numbers)

}
sortAbsoluteNumbers([-5, -30, 7, 100, 99, -8, 25])

function procesarPedido(pedidos) {
    const cliente = pedidos.shift()
    pedidos.unshift('Cocacola')
    pedidos.push(cliente)
    console.log(pedidos)
}
  procesarPedido(['Carmen', 'Hamburguesa'])




 
