// deelbaar door 3 nast elkaar

var resultaat = ""
for(let i=1;i<=30;i=i+1){
    if(i%3==0){
        if(i==30){
            resultaat = resultaat + i
        }else{
            resultaat = resultaat + i + ","
        }
    }
}
console.log(resultaat)




