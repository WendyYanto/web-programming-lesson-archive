// FIRST - EASY CHALLENGE
// function answer(input) {
//   let output = []
//   const length = input.length

//   for (let i=0; i < length; i++) {
//     output[i] = input[i]
//     output[i + length] = input[i]
//   }

//   return output
// }

// function tripleInput(input) {
//   let output = []
//   const length = input.length

//   for (let i=0; i < length; i++) {
//     output[i] = input[i]
//     output[i + length] = input[i]
//     output[i + length + length] = input[i]
//   }

//   return output
// }

// expected output: [1,2,3,4,1,2,3,4]
// console.log(answer([1,2,3,4]))

// // expected output: [1, 3, 1, 1, 3, 1]
// console.log(answer([1,3,1]))

// // expected output: [2, 5, 2, 5]
// console.log(answer([2, 5]))

// expected: [1,2,3,1,2,3,1,2,3]
// console.log(tripleInput([1,2,3]))
// expected: [5,6,5,6,5,6]
// console.log(tripleInput([5,6]))

// FIRST - EASY CHALLENGE


// SECOND - EASY CHALLENGE

// function process(input) {
//   let output = ""
//   let count = 0
//   let value = String(input)

//   for (let i = value.length - 1; i >= 0; i--) {
//     if (count == 3) { 
//       count = 0
//       output = "." + output
//     }

//     output = value[i] + output
//     count++
//   }

//   return output
// }

// Expected: '3.456'
// console.log(process(50000000))

// // Expected: '123.456.789'
// console.log(process(123456789))

// 50000 -> "50.000"
// 1000000 -> "1.000.000"
// 5600000 -> "5.600.000"

// SECOND - EASY CHALLENGE

// THIRD - EASY CHALLENGE

// function getWealthiest(accounts) {
//   let wealthiestNumber = 0

//   // Logic

//   return wealthiestNumber
// }

// expected: 6
// console.log(getWealthiest([[1,2,3], [3,2,1]]))

// expected: 6
// console.log(getWealthiest([[1,5], [7,3], [3,5]])

// THIRD - EASY CHALLENGE