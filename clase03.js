// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
const factorial = 1;
let r = 10;
for(let i = factorial; i<10; i++){
    
    r = r*i;
    console.log(r);
}



// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
let min=1;
let p=10;
while(p>1){  
    min= min*p; 
    console.log("ejercicio 2", min);
    p--;
  
}


// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
min=1;
p=10;


    while(1<p){
        if(0 < p){  
            min= min*p; 
           console.log("factorial while", min);
           p--;
    }else{
        console.log("la prueba a finalizado");
        break;
       
    }
 }


