// multi  arguments

let add = function (a,b, c ) {
    return a + b + c //no need to declare results for something simple
}

let result = add(10,1, 5);
console.log(result)

//defualt arguments

let getScoreText = function (name = 'non',score = 0) {
    retuen `Name: ${name} - score: ${score}`
   // return 'Name:' + name + ' - Score: ' + score
}

let scoreText= getScoreText(undefined, 100);
console.log(scoreText)

//

let getTip = function (bill, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = bill * tipPercent
    return `A 20 percent tip on ${percent} would be ${tip} `
    
}

let tip = getTip(100, .25)
console.log(tip)

