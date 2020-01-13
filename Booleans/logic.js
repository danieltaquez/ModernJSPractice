/* let temp = 65;
if (temp >=60 && temp <=90) {
    console.log('nice outside')
} else {
    console.log('dont go outside')
}

// coding with range
// tru if boht sides are true &&/ two conditions being met
//tur if only one is tru OR ||

if (temp <= 0 || temp>= 120){
    console.log('Dont go outside')
}else {
    console.log('Your good G')
} */

/* let temp = 0;
if (temp >=60 && temp <=90) {
    console.log('nice outside')
} else if (temp <= 0 || temp>= 120){
    console.log('Dont go outside')
} else {
    console.log ('up to you')
} */

let isguestOneVegan = true
let isguestTwoVegan = false

if (isguestOneVegan && isguestTwoVegan) {
    console.log('Vegan menu');
}else if  (isguestOneVegan || isguestTwoVegan){
    console.log('Sugest vegan')
}else {
    console.log('Anything')
}

