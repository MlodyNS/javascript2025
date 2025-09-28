// product van eerste 5 getalen
//10 x dezelfde vraag stellen
// daarna de ingave van 1 vraag opvangen
//iedere ingave optellen om de som te bereiken

var som = 1;
for(let i=1;i<=5;i=i+1){
    let getal = parseInt(window.prompt("Geef een getal in:"));
    som= som*getal
}
console.log(som)




