// START - Negation Boolean

// console.log(!true)
// console.log(!false)

// console.log(!!!false)

// !(!false) 
// !(true) => false

// END - Negation Boolean

// START - STRING
// const name = "Johnny"
// const lastIndex = name.length - 1

// console.log(name[lastIndex])

// const word = "Word"

// console.log(word.substring(1))

// console.log(word.substr(2, 20))
// console.log(word.substring(1, 2))

// const sentence = "Word1_Word2_Word3"
// const words = sentence.split('')

// const word = sentence.replaceAll('Word', 'Any')
// console.log(word)

// const myName = "Cristiano Ronaldo 123"
// const lowerCaseMyName = myName.toLowerCase()
// console.log(lowerCaseMyName)

// console.log(myName.toUpperCase())

// const firstWord = "Cristiano"
// const secondWord = "ronaldo"

// // "firstWord and secondWord."
// const word = firstWord.toUpperCase() + " and " + secondWord + "."
// const literalsWord = `${firstWord.toUpperCase()} and ${secondWord}.`

// console.log(word)
// console.log(literalsWord)
// END - STRING

// START - BigInt

// == -> value sama ga ? 
// === -> value sama ga dan tipe data sama ga ? 
// const correctValue = BigInt(Number.MAX_VALUE)
// const maxValue = Number.MAX_VALUE
// console.log(correctValue === maxValue)

// const number = Number.MAX_VALUE + 1
// console.log(number == Number.MAX_VALUE)
// END - BigInt

// START - NULL or UNDEFINED
// let value

// console.log(value)
// END - NULL or UNDEFINED

// START - EXPLICIT CONVERSION
// const numberInString = "123"
// const number = parseInt(numberInString)

// console.log('from string to number : ')
// console.log(number)
// console.log('from number to string : ')
// console.log(String(number))

// falsy value in javascript
// const booleanInString = ""
// console.log(Boolean(booleanInString))
// console.log(String(true))

// console.log(!null)
// console.log(Number(Boolean(-123)))
// Boolean(123) -> true
// Number(true) -> 1

// console.log(Number(true) + 1)
// console.log(Number(false) + 1)

// END - EXPLICIT CONVERSION

// START - IMPLICIT CONVERSION

// console.log(parseInt(5) + parseInt("2"))
// END - IMPLICIT CONVERSION

// START - ARRAY
// const firstNumber = 1
// const secondNumber = 2
// const thirdNumber = 3
// const fourthNumber = 4
// // ...
// const tenthNumber = 10

// const number = [1,2,3,4,5,6,7,8,9, 10]
// const otherNumber = [11, 12, 13, 14, 15]

// // console.log(number)
// // console.log(otherNumber)

// // console.log(otherNumber.concat(number))

// console.log([otherNumber, number][0][0])
// console.log([...otherNumber, ...number][0])
// END - ARRAY