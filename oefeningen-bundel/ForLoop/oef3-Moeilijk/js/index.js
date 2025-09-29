// programma die gegeven antal sterren print

var getal = parseInt(window.prompt("Geef een getal in:"));
var ster = "*"
var teller = 0

// opbouwen van sterren
for(var i=1;i<=getal;i=i+1) {
    console.log(ster)
    ster = ster + "*"
    teller = teller + 1
}
// afbouwen van sterren
for (var j=getal; j>=1;j=j-1){
    var steraf = ""
    for (var l= 1; l<=j;l=l+1){
        steraf = steraf + "*"
        teller = teller - 1
    }
    console.log(steraf)


}










