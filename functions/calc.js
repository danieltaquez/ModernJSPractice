//student score, tottal possible score
// 15/20 -> you got a (75%!)

let studentScore = function (score, totalScore){
    let percent = (score/totalScore) * 100
    
    let grade = ''
    
    if (percent >= 90) {
        grade ='A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >=70) {
        grade = 'C'
    }

    return `You got a ${grade}(${percent})%`

}

let result = studentScore(17,20)
console.log(result)

