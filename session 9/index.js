// const car = {}

// car.brand = "Hyundai"
// car.hasfourChair = true
// car.hasfourChair = false

// const car = {
//   'brand': 'Hyundai',
//   'hasfourChair': true,
//   'recommended by Elon Musk': null
// }

// console.log("Brand : " + car.brand)
// console.log("Recommended : " + car['recommended by Elon Musk'])
// // console.log('Recommnended ' + )
// console.log(car)

// START - OBJECT CHALLENGE

// const otherObject = {
//   key: 'value'
// }

// const specifications = {
//   tire: {
//     type: 'TYPE',
//     durable: 'BEST'
//   }
// }

// const car = {
//   brand: 'Hyundai',
//   specifications
// }

// console.log(car.specifications.tire.otherObject)

// END - OBJECT CHALLENGE

// START - OBJECT CHALLENGE

// const CHOICES = {
//   CAR: {
//     price: 'Rp 2.000'
//   },
//   BIKE: {
//     price: 'Rp 5.000'
//   },
//   BUS: {
//     price: 'Rp 10.000'
//   },
//   'BIG BUS': {
//     price: 'Rp 100.000'
//   }
// }

// const userChoice = 'BIKE'

// // console.log(CHOICES.userChoice.price) 
// // undefined.price
// console.log(CHOICES.BIKE.price)
// console.log(CHOICES['BIKE'].price)

// END - OBJECT CHALLENGE


// START - IF SELECTION

// Gw punya duit 10.000
// Apel 5.000
// Orange 15.000

// if (pnya duit bisa beli orange):
//  beli orange
// if (pnya duit bisa beli apel):
//  beli apel
// else 
//  ga beli apa2

// let money = 19000
// const bananaPrice = 4000
// const applePrice = 5000
// const orangePrice = 15000

// if (money >= orangePrice) {
//   console.log('Bought orange')
//   money -= orangePrice
// } else if (money >= applePrice) {
//   console.log('Bought apple')
//   money -= applePrice
// } else if(money >= bananaPrice) {
//   console.log('Bought banana')
//   money -= bananaPrice
// } else {
//   console.log('Go home')
// }

// console.log(`Money Left : ${money}`)

// END - IF SELECTION

// START - IF CHALLENGE

// const firstValue = true
// const secondValue = false

// if (!firstValue && secondValue) {
//   // !firstValue && secondValue
//   // false && false = false
//   console.log('First line')
// } else if (firstValue && secondValue) {
//   // true && false = false
//   if (!!secondValue) {
//     // !false = true
//     // !!false = !true
//     // false
//     console.log('Second line')
//   } else {
//     console.log('Third line')
//   }
// } else {
//   console.log('Fourth line')
// }

// END - IF CHALLENGE

// START - SWITCH CASE SELECTION
// const value = 'B'

// if (value == 'A') {
//   console.log('User choose A')
// } else if (value == 'B') {
//   console.log('User choose B')
// } else if (value == 'C') {
//   console.log('User choose C')
// } else {
//   console.log('User choose other')
// }

// switch (value) {
//   case 'A':
//     console.log('User choose A')
//     break
//   case 'B':
//     console.log('User choose B')
//     break
//   case 'C':
//     console.log('User choose C')
//     break
//   default:
//     console.log('User choose other')
//     break    
// }
// END - SWITCH CASE SELECTION

// START - SWITCH CASE CHALLENGE
// const value = 'A'

// switch (value) {
//   case 'A':
//   case 'B':
//     console.log('User choose B')
//     break
//   case 'C':
//     console.log('User choose C')
//     break
//   case 'D':
//     console.log('User choose D')
//     break
//   default:
//     console.log('User choose other')
//     break    
// }
// END
// END - SWITCH CASE CHALLENGE

// START - LOOP
// for (i = 0; i < 10; i++) {
//   console.log(i)
// }

// for (let i = 0; i < 10; i++) {
//   console.log('i : ' + i)
//   for (let j = 0; j < i; j++) {
//     console.log('Hi')
//   }
// }

// for (let i = 6; i < 10; i++) {
//   console.log(i)
// }
// END - LOOP