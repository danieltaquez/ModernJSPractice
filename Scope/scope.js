let meatEater = true
let NotMeatEater = false

if (meatEater || NotMeatEater) {
    console.log("Meat Menu");
}else if (NotMeatEater && meatEater){
    console.log("Vegan Menu")
}else {
    console.log("both")
}