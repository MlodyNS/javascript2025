/* Som van fibonacci reeks */

let limiet = parseInt(prompt("geef een getal in:"))
var a = 1, b=1 // deze var zal eerste nummers vormen
var som = 0
for (let i = 3; i <= limiet; i++) { //dit loop bigint van 3
    if (a<=limiet) {
        console.log(a)
        var volgende = a + b // dti zorgt dat (volgende) A + B wordt (1 + 1)
        a = b; // A wordt B
        b = volgende; // B wordt volgende (a+b = 1+1=2)
        som = som + volgende
    }
}
console.log(som)
