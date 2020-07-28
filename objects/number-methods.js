//let num = 103.941

//to.fixed

//console.log(num.toFixed(1))
//console.log(Math.round(num))
//console.log(Math.floor(num)) // always rounding doen with floor
//math/random creates a randoms number 0.9999 to 0

//let min = 10
//let max = 20

//let random = Math.floor(Math.random() * (max-min + 1)) + min

//console.log(random)

//challange area
//fuction. take in a guess. tru if correct. false if not correct.

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let random = Math.floor(Math.random() * (max-min + 1)) + min

    return guess === random
}

console.log(makeGuess(1))