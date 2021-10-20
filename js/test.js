const a=0
const b=8
const c=4

function quadratic(a,b,c){

    if (a===0){
        return 'a cannot equal 0';
    }
    else{
        const discr=b**2-4*a*c
        const x1 = (b**2+discr)/(2*a)
        const x2 =(b**2-discr)/(2*a)
        return [x1,x2];   
    }
 }
  console.log(`X1 and X2: ${quadratic(a,b,c)}`);



























