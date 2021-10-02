// START - ASSIGNMENT DISCUSSION

// for (let i = 0; i < 5; i++) {
//   let word = ""
//   for (let j = 0; j < 5; j++) {
//     if (i == 0 || i == 4 || j == 0 || j == 4) {
//       word += "*"
//     } else {
//       word += " "
//     }
//   }
//   console.log(word)
// }

// for (let i = 0; i < 5; i++) {
//   let word = ""
//   for (let j = 0; j < 5; j++) {
//     if ((i == j) || (i + j == 4)) {
//       word += "*"
//     } else {
//       word += " "
//     }
//   }
//   console.log(word)
// }

// END - ASSIGNMENT DISCUSSION

// START - CHALLENGE - FUNCTION
// function calculatePrice(price, discount) {
//   if (typeof price != 'number') {
//     console.log('price should be number')
//     return 0
//   }
//   if (typeof discount != 'number') {
//     console.log('discount should be number')
//     return 0
//   }
//   if (discount >= 100 || discount <= 0) {
//     console.log('discount is not valid')
//     return 0
//   }

//   const discountPrice = price * (discount/100)
//   const finalPrice = price - discountPrice

//   return finalPrice
// }

// console.log(calculatePrice(100000, 120))
// END - CHALLENGE - FUNCTION

// START - PASS BY REFERENCE AND VALUE

// PASS BY REFERENCE
// const numbers = [1,2,3,4]

// function addNumberNewArray(arrayNumbers) {
//   const newArrayNumber = []
//   for (let i = 0; i < arrayNumbers.length; i++) {
//     newArrayNumber[i] = arrayNumbers[i]
//   }
//   newArrayNumber[4] = 5

//   console.log('print from function')
//   console.log(newArrayNumber)
// }

// function addNumber(arrayNumbers) {
//   arrayNumbers[4] = 5

//   console.log('print from function')
//   console.log(arrayNumbers)
// }

// addNumber(numbers)

// console.log('print out of function')
// console.log(numbers)

// PASS BY VALUE
// let number = 10

// function changeNumber(paramNumber) {
//   paramNumber = 5
//   console.log('print from function')
//   console.log(paramNumber)
// }

// changeNumber(number)

// console.log('print out of function')
// console.log(number)

// END - PASS BY VALUE OR REFERENCE

// START - RECURSIVE FUNCTION

// 1 1 2 3 5 8 13 21

// Urutan - Angka
// 1 - 1
// 2 - 1
// 3 - 2
// 4 - 3
// 5 - 5
// 6 - 8
// 7 - 13

// function fibonacci(n) {
//   if (n <= 2) {
//     return 1
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// fibonacci(4)

// function fibonacci(4) {
//   if (n <= 2) {
//     return 1
//   }
//   // 2 + 1
//   // 3
//   return fibonacci(3) + fibonacci(2)
// }

// function fibonacci(3) {
//   if (n <= 2) {
//     return 1
//   }
//   // return fibonacci(3 - 1) + fibonacci(3 - 2)
//   // return 1 + 1
//   // return 2
//   return fibonacci(2) + fibonacci(1)
// }

// function fibonacci(2) {
//   if (n <= 2) {
//     return 1
//   }
// }

// function fibonacci(1) {
//   if (n <= 2) {
//     return 1
//   }
// }

// console.log("5 : " + fibonacci(5))
// console.log("6 : " + fibonacci(6))
// console.log("7 : " + fibonacci(7))

// console.log(fibonacci(5))

// END - RECURSIVE FUNCTION

// START - TRY CATCH FUNCTION

// let number = 0
// // const y = 50

// try {
//   number = y + 1
// } catch (error) {
//   console.log('Terjadi error')
//   number = 10
// }

// console.log('Aku ga error nich dengan number ' + number)

// END - TRY CATCH FUNCTION

// START - BUILT-IN FUNCTION

// const numbers = [1,2,3,4]
// numbers.push(5)
// console.log(numbers)

// const numbers = [4,8,7,1,5,2,3,9,6]
// console.log(numbers.sort())

// const numbers = [1,2,3,4]
// [4,3,2,1]
// console.log(numbers.reverse())

// const oddNumbers = [1,3,5,7,9]
// const numbers = [1,2,3,4,5,6,7,8,9]

// const output = []

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < oddNumbers.length; j++) {
//     if (numbers[i] == oddNumbers[j]) {
//       output.push(oddNumbers[j])
//     }
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (oddNumbers.includes(numbers[i])) {
//     output.push(numbers[i])
//   }
// }

// console.log(output)
// END - BUILT-IN FUNCTION

const output = []
const input = [1,2,1]

// for (input smpai hbis) -> stiap for dalam-nya -> push ke dalam output
// for (input smpai hbis) -> stiap for dalam-nya -> push ke dalam output

