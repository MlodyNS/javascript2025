

var aantal = parseFloat(window.prompt("Geef aantal getalne in dat je wil weergeven:"))
var getalen = []

for (var i = 1; i <= aantal; i++) {
    var getal = parseInt(prompt('Geef een getal in:'))
    getalen.push(getal)
}
console.log(getalen)