var werk = parseInt(window.prompt("1=Zelfstandige 2=Arbeider 3=bedinde 4=ambtenar"));


/*if ( werk === "zelfstandig"){
    alert(`Werkt heel veel`)
}else if( werk === "arbeider"){
    alert(`werkt veel`)
}else if( werk === "bediende"){
    alert(`werkt`)
}else{
    alert(`Duuuh`)
}*/

switch(werk){
    case(1):
        alert("werkt heel veel")
        break;
    case(2):
        alert("werkt veel")
        break;
    case(3):
        alert("werkt")
        break;
    case(4):
        alert("Duuuh")
        break;
    default:
        alert("wa doe je?")
}
