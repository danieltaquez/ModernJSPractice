let num = 103.941

//to.fixed

console.log(num.toFixed(1))
console.log(Math.round(num))
console.log(Math.floor(num)) // always rounding doen with floor
//math/random creates a randoms number 0.9999 to 0

let min = 10
let max = 20

let random = Math.floor(Math.random() * (max-min + 1)) + min

console.log(random)