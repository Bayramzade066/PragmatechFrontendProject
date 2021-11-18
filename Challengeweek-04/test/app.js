// function Salamde() {
//     return function() {
//        console.log("Salam!");
//     }
//  }
//  Salamde()();
//  // Salam!



 const Salamde = function() {
    return function() {
        console.log('Salamlar!')
    }
}
const myFunc = Salamde()
myFunc()