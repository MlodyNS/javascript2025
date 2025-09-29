// Print tafel van gegeven getal

function printtafel(tafel){
    for(let i=1;i<=10;i++){
        document.querySelector("#tafel").innerHTML += `<li>${i} x ${tafel} = ${i*tafel}</li>`
    }
}
//
let getal = parseInt(window.prompt("Geef een getal in:"))
printtafel(getal)
