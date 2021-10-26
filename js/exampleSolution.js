function exampleSolution(){
for (let i=0 ;i!==6;) {
    i = prompt('Решите пример (2 + 2 * 2)', '');
    i=Number(i)
    if(i===6){ 
	return;
    }  
}
}
exampleSolution();