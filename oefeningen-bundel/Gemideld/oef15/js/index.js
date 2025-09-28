// Print veelvouden van een gegeven getal

var getal = parseInt(window.prompt("Geef uw getal in"))
for(let i=getal;i<=100;i+=1){
    if(i % getal == 0){
        console.log(i)
    }

}




