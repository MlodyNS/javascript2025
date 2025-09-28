// Oefening 1: Som van alle elementen in een array
// Schrijf een programma dat een array van getallen
// neemt en de som van alle getallen in de array berekent.
/*
let getalen = [5,6,7,8]
let som = 0

for (){
    som = i + getalen
    console.log(som)
}
*/
let teller = 0
let elementen = [5,6,8,9,7]
let som =0
for (let element of elementen){
    som=som+element


}
alert(`de totale som van ${elementen.length} is ${som}`)
