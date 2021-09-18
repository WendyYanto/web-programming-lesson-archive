// START - FOR

// for (let i = 0; i < 5; i++) {
//   let word = ""
//   for (let j = 0; j < 5; j++) {
//     if (i == j) {
//       word += " "
//     } else {
//       word += "*"
//     }
//   }
//   console.log(word)
// }

// ketika i == 0 -> print *
// ketika j == 0 -> print *
// ketika j == 4 -> print *

// for (let i = 0; i < 5; i++) {
//   let word = ""
//   for (let j = 0; j < 5; j++) {
//     if (i == 0 || j == 0 || j == 4) {
//       word += "*"
//     } else {
//       word += " "
//     }
//   }
//   console.log(word)
// }

// *****
// *   *
// *   *
// *   *
// *   *

// for (let i = 0; i < 5; i++) {
//   let word = ""
//   for (let j = 0; j < 5; j++) {
//     if (i == 4 || j == 0 || j == 4) {
//       word += "*"
//     } else {
//       word += " "
//     }
//   }
//   console.log(word)
// }

// *   *
// *   *
// *   *
// *   *
// *****

// for (let i = 0; i < 5; i++) {
//   let word = ""
//   for (let j = 0; j < 5; j++) {
//     if (i == 4 || i == 0 || j == 0) {
//       word += "*"
//     } else {
//       word += " "
//     }
//   }
//   console.log(word)
// }

// i = 0, i = 4, j = 0
// *****
// *   
// *   
// *   
// *****

// for (let i = 0; i < 5; i++) {
//   let word = ""
//   for (let j = 0; j < 5; j++) {
//     if (i == 2 && j == 2) {
//       word += " "
//     } else {
//       word += "*"
//     }
//   }
//   console.log(word)
// }

// *****
// *****
// ** **
// *****
// *****

// for (let i = 0; i < 5; i++) {
//   let word = ""
//   for (let j = 0; j < 5; j++) {
//     if (j%2==1) {
//       word += " "
//     } else {
//       word += "*"
//     }
//   }
//   console.log(word)
// }

// * => 0, 2, 4
// spasi => 1, 3

// * * *
// * * *
// * * *
// * * *
// * * *

// END - FOR

// START - WHILE

// for (let i = 0; i < 10; i++) {
//   console.log('Number ' + i)
// }

// let i = 0

// while (i < 10) {
//   console.log('Number ' + i++)
// }

// END - WHILE

// START - DO WHILE

// let i = 0

// do {
//   console.log('Number ' + i)
//   i++
// } while (i < 10)

// while (i < 10) {
//   console.log('Number ' + i)
//   i++
// }

// console.log('End')

// END - DO WHILE

// START - LOOPING IN ARRAY
// const numbers = [2,3,4,5,6,7,8]

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// for (let i = 1; i <= numbers.length; i++) {
//   console.log(numbers[i])
// }

// for (let number of numbers) {
//   console.log(number)
// }

// for (let i in numbers) {
//   console.log(numbers[i])
// }

// END - LOOPING IN ARRAY

// START - LOOP TO WHILE

// const animals = [{
//   name: 'Dog',
//   cuteness: 100
// }, 
// {
//   name: 'Cat',
//   cuteness: 90
// },
// {
//   name: 'Mouse',
//   cuteness: 10
// }]

// for (let animal of animals) {
//   console.log(`This ${animal.name.toLowerCase()} has score of ${animal.cuteness}%.`)
// }

// let i = 0

// while (i < animals.length) {
//   const animal = animals[i]
//   console.log(`This ${animal.name.toLowerCase()} has score of ${animal.cuteness}%.`)
//   i++
// }

// END - LOOP TO WHILE

// START - FUNCTION

// function printFruitInfo(fruit, score) {
//   console.log(`${fruit} is a fruit`)
//   console.log(`${fruit} is very good fruit.`)
//   console.log(`I like ${fruit} with score of ${score}`)
// }

// printFruitInfo('Apple', 10)
// printFruitInfo('Pear', 20)
// printFruitInfo('Watermelon', 30)
// printFruitInfo('Banana', 40)
// printFruitInfo('Melon', 50)

// function calculateRumus(first, second, third) {
//   return (first + second) * third
// }

// console.log(calculateRumus(1, 2, 100) + calculateRumus(1, 4, 100))

// END - FUNCTION