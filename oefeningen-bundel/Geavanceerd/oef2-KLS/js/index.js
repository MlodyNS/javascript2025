/* Faculteit van een getal
* 5= 5*4*3*2*1
* */

// let getal = parseInt(prompt("Geef een getal in"))
// var nieuwgetal = 1
// for(let i = 1; i<=getal; i++){
//     nieuwgetal = nieuwgetal * i
// }
// console.log(nieuwgetal)

let getal = parseInt(prompt("Geef een getal in"))
var nieuwgetal = 1

for(let i = getal; i>=1;i--){
    nieuwgetal = nieuwgetal * i
}
console.log(nieuwgetal)