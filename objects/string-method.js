/*let name = 'Dan Taquez'


//lenth propetry
console.log(name.length)

//convert to uper/lower case

console.log(name.toUpperCase())

console.log(name.toLowerCase())

// includes boolean
let password = 'abc1234sword'
console.log(password.includes('password'))

// trim meathod (goood for orginzing data)

let string = ' wdw wddw wdw wdwkdwkd'
console.log(string.trim())

//is valid password. 
// tru if lenth more then 8. and it doesnt contain the word passwrod. */

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')){
        return true
    }else {
        return false
    }
}

console.log(isValidPassword('ABS'))
console.log(isValidPassword('danidnmcience'))
console.log(isValidPassword('passwordwjfnff'))

