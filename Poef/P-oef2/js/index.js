/*
Je vraagt het geboortejaar van de gebruiker (bijv. 1973).
Je vraagt ook het huidige jaar (bijvoorbeeld 2025)
Je laat de pc uitrekenen hoeveel jaar je bent en doet de onderstaande controle:
Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
 */

var geboorteJaar = window.prompt("geef uw gebortejaar in:")
var huidigeJaar = window.prompt("Geef het huidige jaar in:")

var geboorteJaar = parseInt(geboorteJaar)
var huidigeJaar = parseInt(huidigeJaar)

if (huidigeJaar-geboorteJaar >= 18){
    console.log(`u bent ${huidigeJaar-geboorteJaar} jaar, u mag deelnemen`)
}else{
    console.log(`u bent ${huidigeJaar-geboorteJaar} jaar, u bent te jong`)
}

