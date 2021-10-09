// function answer(input) {
//   let output = []
//   const n = input.length

//   // First solution
//   for (let i = 0; i < input.length; i++) {
//     output[i] = input[i]
//     output[i+n] = input[i]
//   }

//   // Second solution
//   output = [...input, ...input]
//   output = [1,2,3,4, 1,2,3,4]

//   return output
// }

// // expected output: [1,2,3,4,1,2,3,4]
// // console.log(answer([1,2,3,4]))


// THIRD - EASY CHALLENGE

// function getWealthiest(accounts) {
//   let wealthiestNumber = 0

//   for (let i = 0; i < accounts.length; i++) {
//     let totalWealth = 0
//     for (let j = 0; j < accounts[i].length; j++) {
//       totalWealth += accounts[i][j]
//     }
//     if (totalWealth > wealthiestNumber) {
//       wealthiestNumber = totalWealth
//     }
//   }

//   return wealthiestNumber
// }

// // expected: 6
// console.log(getWealthiest([[1,2,3], [3,2,1]]))

// // expected: 6
// console.log(getWealthiest([[1,5], [7,3], [3,5]]))

// THIRD - EASY CHALLENGE

// FOURTH - EASY CHALLENGE

function getNotAppearedNumbers(number) {
  const output = []

  for (let i = 0; i < number.length; i++) {

  }
  // logic

  return output
}

// // Expected: [5, 6]
// console.log(getNotAppearedNumbers([4,3,2,7,8,2,3,1]))

// // Expected: [2]
// console.log(getNotAppearedNumbers([1,1]))

// // Expected: []
// console.log(getNotAppearedNumbers([1,2,3]))

// FOURTH - EASY CHALLENGE

// FIFTH - EASY
const numbers = new Set()

function addItems(number) {
  numbers.add(number)
}

function printItems() {
  console.log([...numbers])
}

addItems(5)
addItems(5)
addItems(5)
addItems(6)
addItems(7)
addItems(7)
addItems(7)
addItems(7)
addItems(8)

// Expected: [5,6,7,8]
printItems()
// FIFTH - EASY
