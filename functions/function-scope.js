//global conertedcelsuis other valur FAR
// local result, num 
    //isfreezing

let Far = function (num) {
    let result = ((num -32)/1.8);

    if (result <= 0) {
        let isfreezing = true;
        console.log('Its verry cold out WARNING')
    }

    return result
};

let ConvertedCelsuis = Far(33)
let otherValue = Far(68)

console.log(ConvertedCelsuis)
console.log(otherValue)
 