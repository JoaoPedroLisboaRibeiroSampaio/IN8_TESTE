let x = 3;
let y = 5;
let valor = 0;
let i = 0;

for(i = 0; i < 1000; i++){
    if(i % x == 0 || i % y == 0){
        valor += i;
    }
}

console.log(valor);