// multi  arguments

let add = function (a,b, c ) {
    return a + b + c //no need to declare results for something simple
}

let result = add(10,1, 5);
console.log(result)

//defualt arguments

let getScoreText = function (name = 'non',score = 0) {
    return 'Name:' + name + ' - Score: ' + score
}

let scoreText= getScoreText(undefined, 100);
console.log(scoreText)

//

let getTip = function (bill, tipPercent = .2) {
    return 'Bill:' + bill + ' Tip: ' +  bill * tipPercent 
    
}

let tip = getTip(100, .25)
console.log(tip)