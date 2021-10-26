const a = 1
const b = 2
const c = 3 
function quadratic(a,b,c){

    if (a===0){
        return NaN;
    }
    else{
        const discr=b**2-4*a*c
        const x1 = (b**2+discr)/(2*a)
        const x2 =(b**2-discr)/(2*a)
        return [x1,x2];   
    }
}
function isPangram(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercase = s.toLowerCase();
    for(let i = 0; i < alphabet.length; i++){
        if(lowercase.indexOf(alphabet[i]) === -1){
          return "False";
        }
       }
      return "True";
}
const valid = isPangram("hi");

if (valid){
    console.log(`X1 and X2: ${quadratic(a,b,c)}`);
}
else if (valid) {
    
    alert("Сам дурак");
}