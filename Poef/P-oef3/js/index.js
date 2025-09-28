/* Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
Schrijf een prompt die de leeftijd vraagt en zorg ervoor dat je een number uitkomt */

var jaartaal1 = window.prompt("geef uw jaartaal 1 in:")
var jaartaal2 = window.prompt("Geef het jaartaal 2 in:")

var jaartaal1 = parseInt(jaartaal1)
var jaartaal2 = parseInt(jaartaal2)



if(jaartaal1>jaartaal2){
    console.log(`${jaartaal1} - ${jaartaal2} = ${jaartaal1-jaartaal2}`)
}else{
    (console.log(`${jaartaal2} - ${jaartaal1} = ${jaartaal2-jaartaal1} `))
}



