// START - without .map

// const numbers = [1, 4, 9, 16]

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i] * 2
// }

// console.log(numbers) // [ 2, 8, 18, 32 ]

// END - without .map

// START - with .map

// function timeTwo(number) {
//   return number * 2
// }

// const output = numbers.map(timeTwo)

// const output = numbers.map(function(number) {
//   return number * 2
// })

// const output = numbers.map(number => {
//     return number * 2
//   })

// const output = numbers.map(number => number * 2)

// console.log(numbers)
// console.log(output)

// END - with .map

// START - without .filter

// const numbers = [1,2,3,4,5]
// const oddNumbers = []
// let index = 0

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 1) {
//     oddNumbers[index] = numbers[i]
//     index++
//   }
// }

// console.log(oddNumbers)

// END - without .filter

// START - with .filter

// function isOdd(number) {
//   // if (number % 2 == 1) {
//   //   return true
//   // } else {
//   //   return false
//   // }
//   return number % 2 == 1
// }s

// const oddNumbers = numbers.filter(isOdd)
// const oddNumbers = numbers.filter(number => number % 2 == 1)
// const evenNumbers = numbers.filter(number => number % 2 == 0)

// console.log(evenNumbers)

// END - with .filter

// START - with .some
// const numbers = [2, 4, 6, 8, 10]

// const hasOddNumber = numbers.some(function(number) {
//   return number % 2 == 1
// })

// console.log(hasOddNumber)
// END - with .some

// START - with .find
// const numbers = [2, 4, 6, 8, 10, 11, 13]

// const firstOddNumber = numbers.find(function(number) {
//   return number % 2 == 1
// })

// console.log(firstOddNumber)
// END - with .find

// ES6

// FOREACH

// const numbers = [2, 4, 6, 8, 10, 11, 13]

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// numbers.forEach(number => {
//   console.log(number)
// }) 


// FOREACh


// console.log('2' == 2) // cek value
// console.log('2' === 2) // cek value dan cek tipe data