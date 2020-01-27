// undefines is the absence of a value

let name 

name = 'jen'

if (name === undefined) {
    console.log("provide a name")
}else {
    console.log(name)
}

//undefines function arguments that arnt provided

let square = function (num) {
    console.log(num)
}

let result = square()

console.log(result)

//if function does have a value returned the program will reture a undefined  
// null is excplitly cleared by dev, undefined is a js defualt

let age = 27;

age = null

console.log(age);