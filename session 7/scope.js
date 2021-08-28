{
  let dataInLet2 = 'data in let2'
  {
    var dataInVar = "data in var"
    let dataInLet = "data in let"

    console.log('Local Scope')
    console.log(dataInVar)
    console.log(dataInLet2)
    console.log(dataInLet)
  }

  console.log('Global Scope')
  console.log(dataInVar)
  console.log(dataInLet2)
  console.log(dataInLet)
}