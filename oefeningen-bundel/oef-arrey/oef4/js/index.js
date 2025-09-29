// Oefening 4: Omgekeerde array afdrukken
// Schrijf een programma dat de elementen van een array in omgekeerde volgorde afdrukt.

// let elementen = [1,2,3,4,5,6,7,8,9,10]
//
// let omgekeerd = []
// for (element of elementen){
//     omgekeerd = elementen.toReversed()
//
// }
// console.log(omgekeerd)

let elementen = [1,2,3,4,5,6,7,8,9,10]

let omgekeerd = elementen.toReversed()

for (let element of omgekeerd){
    console.log(element)
}