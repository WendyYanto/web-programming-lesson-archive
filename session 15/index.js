// '.findIndex(), forEach(), every(), .reduce()'

// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 3) {
//     console.log(i)
//     break
//   }
// }

// const index = numbers.findIndex(number => {
//   return number % 2 === 0
// })

// console.log(index)

// FOREACH

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// numbers.forEach(number => {
//   console.log(number)
// })

// FOREACH

// EVERY

// const numbers = [1,2,3,5,7,9]

// let isAllOddNumber = true

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     isAllOddNumber = false
//     break
//   }
// }

// console.log(isAllOddNumber)

// const isAllOddNumber = numbers.every(number => number % 2 == 1)
// console.log(isAllOddNumber)

// EVERY

// REDUCE

// const numbers = [1,2,3,4]
// let totalNumber = 0

// for (let i=0; i<numbers.length; i++) {
//   totalNumber = totalNumber + numbers[i]
// }

// console.log(totalNumber)

// const result = numbers.reduce((accumulator, number) => accumulator + number, 0)
// console.log(result)

// REDUCE