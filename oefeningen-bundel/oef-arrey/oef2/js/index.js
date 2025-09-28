// Oefening 2: Grootste getal in een array vinden
// Schrijf een programma dat het grootste getal in een array van getallen vindt.



let teller = 0
let elementen = [5,6,8,9,7]
let hoogste =0
for (element of elementen){
    if(hoogste < element){
        hoogste=element
    }
}
alert(`hoogste element is ${hoogste}`)
