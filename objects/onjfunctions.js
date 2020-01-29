let OrwellBook = {
    //properties
    title: '1984',
    author: 'Goerge Orwell',
    pageCount: 360
}


let ZinnBook = {
    //properties
    title: 'A peoples History',
    author: 'Howard Zinn',
    pageCount: 723 // values
}

let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pagecountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let orwellSum = getSummary(OrwellBook)
let zinnSum = getSummary(ZinnBook)

console.log(orwellSum.pagecountSummary)

//chanllange
//function with fahaarentit in - return object with far,cel,kelv

let conversions = function (temp) {

    return{
    cell: ((temp -32)/1.8),
    kelvin: ((temp + 459.67)* 5/9)
    }
}

let resultsCell = conversions(30)
let resultsKelvin = conversions(40)
console.log(resultsCell)