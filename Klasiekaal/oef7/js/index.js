/* schrijf een programadat die alle oneven getallen
van 1 tot 20 afdrukt
 */

var getal = 0
var radengetal = 7
var teller = 0

while (getal !== radengetal){
    getal = parseInt(window.prompt("Raad het getal"))
    teller = teller + 1
}
console.log(`dit is het getal: ${getal} in ${teller} keer geraden`)
