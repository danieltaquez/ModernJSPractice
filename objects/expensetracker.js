// add income to account
//function reset to 0 (what to change)
// get account summary Acct for andrew has 900 . 100 in come. 100 in expesese


let myAccount = {
    name: 'Dan',
    expenses: 0,
    income: 0
}

//xpen
let addExpense = function (account,amount) {
    account.expenses =  account.expenses + amount
}

//income

let addIncome = function (account,amount) {
    account.income = account.income + amount
}


///reset

let resetAccount = function (account) {
    account.income = account.income * 0
    account.expenses = account.expenses * 0
}



let getSummary = function (account) {

    let balance = account.income - account.expenses

    return {
        summary: `${account.name} has ${balance}.${account.expenses} of spend `,
    }
}

