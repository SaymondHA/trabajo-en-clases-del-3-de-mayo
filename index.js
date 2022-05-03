//1. Hacer un if con operadores logicos que revise la siguiente condicion:
// Si mi edad es menor que 20 años o mayor a 60, *en mi cumpleaños compran helados de chocochips *esto es el console.log

1.
var edad = 20,
    edad =40;

if((edad>=20)&&(edad<=60)){
console.log('en mi cumpleaños compran helado de chocochips')
}
else{
    console.log('en mi cumpleaños no compraron helado de chocochips')
}
if (edad<=20){
    if (edad<=60){
        console.log('en mi cumpleaños compraron helado de chocochips')
    }
}



//1.5 if con operadores logicos que revise la siguiente condicion
// si mi perro esta en la casa y mi gato tambien, *entonces estoy feliz! var perro = true; 

1.5
var perro = true;
var gato = true;

if ((perro=true)){
 console.log('si mi perro y mi gato estan en la casa entonces estoy feliz')
}else{
   console.log('si mi perro y mi gato no estan en la casa no estoy feliz')
}



//2. Hacer un counter que imprima un numero del 1 al 100 pero por cada iteracion no se le suma 1, sino 3 unidades 
//ejemplo:
//1
//4
//7

2.
function hora_inicial (hora_inicial){ 
    for (var hora_inicial = 1; hora_inicial < 100; hora_inicial+hora_inicial+3) {
        hora_inicial(1),
        hora_final(100);
        break;
     }
}
console.log(hora_inicial)