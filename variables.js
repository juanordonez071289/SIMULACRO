/* Crear una función que reciba como parámetro una nota y retorne una de 
estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

Nota es menor a 4 - LIBRE
Nota es menor a 7 y no es LIBRE - REGULAR 
Nota mayor que 6  - PROMOCIONADO. */

/* function calificacion(nota){
    if(nota < 4){
        console.log("LIBRE");
    } else if(nota <= 6 ) {
        console.log("REGULAR");
    } else if( nota <= 10){
        console.log("PROMOCIONADO");
    } else {
        console.log("valor no valido");
    }
}
calificacion(9) */

/* En base al trabajo realizado en la parte A, realiza las modificaciones necesarias para satisfacer los requerimientos que se detallan a continuación.

* Mejorar el ejercicio anterior agregando un return de mensaje de error si la nota es menor que 1 o mayor que 10. */

/* function calificacion(nota){
    if(nota > 0 && nota < 4){
        console.log("LIBRE");
    } else if(nota >= 4 && nota <= 6 ) {
        console.log("REGULAR");
    } else if( nota >= 7 && nota <= 10){
        console.log("PROMOCIONADO");
    } else if(nota < 1 || nota > 10){
        console.log("valor no valido");
    }
}
calificacion(11) */

/* Mejorar el ejercicio anterior, recibiendo ahora 3 notas 
por parámetro, calcular el promedio y en base a este retornar el estado 
del alumno. */

function calificacion(nota1, nota2, nota3){
    let promedio = (nota1 + nota2 + nota3)/3;

    if(promedio > 0 && promedio < 4){
        console.log("LIBRE");
    } else if(promedio >= 4 && promedio <= 6 ) {
        console.log("REGULAR");
    } else if( promedio >= 7 && promedio <= 10){
        console.log("PROMOCIONADO");
    } else if(promedio < 1 || promedio > 10){
        console.log("valor no valido");
    }
}
calificacion(6,7,18)