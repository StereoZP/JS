function simpleNumber(){
    let a = prompt("a?",)
    a=Number(a);
    if (a%a===0 && a%1===0){
        console.log(true);
    } 
    else
        console.log(false);

}
simpleNumber();