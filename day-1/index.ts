import input from './input'

const matchingValues: number[] = []

input.map((item) => {
  input.map((itemToCheck) => {
    if (
      item + itemToCheck === 2020 &&
      !matchingValues.includes(item) &&
      !matchingValues.includes(itemToCheck)
    )
      matchingValues.push(item, itemToCheck)
  })
})

const result = matchingValues.reduce((a, b) => a * b)

console.log('result: ', result)
