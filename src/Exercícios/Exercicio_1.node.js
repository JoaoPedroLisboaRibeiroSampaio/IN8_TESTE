
const recursive = (valor=2 ) => 
{ 
const divisores = [2,3,10];
let indice_divisor=0;
 	divisores.forEach(i =>{
      		 if(valor % i == 0)
        		indice_divisor++;
             else
              	indice_divisor=0;
    });
if(indice_divisor == 3)
    console.log(valor);
else
    return recursive(valor+=2);

} 