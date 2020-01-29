//store peices of information to a definitions 

let myBook = {
    //properties
    title: '1984',
    author: 'Goerge Orwell',
    pageCount: 360
}

console.log(myBook.title) // (title.property)
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)


let human = {

    name: 'Dan',
    city:'Denver',
    age: 23,
    male: true
 
}


console.log(human.age)
console.log(`${human.name} is ${human.age} old`)

let plusOne = function (num) {
    return human.age + num
}

let results = plusOne(1)
console.log(results)

console.log(`${human.name} is ${results} old`)

human.city = 'NewYork'; //CHNGIN PROPERTIE VALUE