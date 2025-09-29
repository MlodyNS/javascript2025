// Oefening 5: Zoeken in een array
// Schrijf een programma dat controleert of een bepaald getal aanwezig is in een array en "Gevonden!" afdrukt als het aanwezig is, anders "Niet gevonden".

let cijfer = parseInt(window.prompt("Geef een getal in"))
let getallen = [1,3,4,6,7,9]
let gevonden = 0

for (let getal of getallen) {
    if (cijfer === getal) {
        gevonden = 1

    }

}
if (gevonden === 1){
    console.log(`Gevonden! het getal ${cijfer} zit er in`)
}else console.log(`Niet gevonden! het getal ${cijfer} zit er niet in`)
