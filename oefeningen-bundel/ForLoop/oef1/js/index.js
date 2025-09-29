// print tafels van gegevn getal



var som = 0
var teller = 0

for(let i=1;i<=3;i=i+1){
    var getal = parseInt(window.prompt(`Geef getal${i} in `))
    som = som + getal
    teller = teller + 1

    }
console.log(`som van ${teller} getalen is ${som}`)






