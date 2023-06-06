// Sesion de Fuciones

/*

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro
código de JS, esto aplica tanto para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

*/
// Funciones, invocación y declaracióm

//Declaración de una función

/*

palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}
Hoisting elevación 

JS, cuando es ejecutado por el motor JS del navegador
primero lee e interpreta las variables 
y las funciones declaradas.


*/

/*
Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/


// Ejemplo de función pero no retorna a ningún valor


nuevaFuncion();

function nuevaFuncion(){
    console.log("Buenos días CH28");
}

function nuevaFuncion(){
console.log("Buenos días corte 28");

}

// Ejemplo de función que si retorna un valor

function holaMundo (nombre){
    return "Hola" + nombre;
    
}

// console.log(holaMundo(Hiram));

/*
Elaborar una función que calcule la velocidad de
un objeto

-Velocidad = distancia / tiempo

-function
-calcularVelovidad
(distancia, tiempo)
-elaborar el bloque de código

*/

function calcularVelocidad(distancia, tiempo){ // Inicio
    return "La velocidad calculada es: " + distancia / tiempo + " m/s";
} // Cierre

console.log(calcularVelocidad(30, 5));


// Funciones dentro de JS

/*

Funciones flecha que también se conocen como Fat arrow, Funciones
lambda

Funciones CallBack- reciben otras funciones como parámetros. 

Funcionan a tréves de otras funciones anonimas.

Promesa.

Funciones Async - await. 

*/




// Funciones de flecha

/*
Son una manera más compacta y sencilla de escribir una función normal

No son lo mismo que una función general, se utiliza en otro tipo de
contexto
Funciones CallBack que requeiren funciones anonimas.

Su uso es limitado. 

Declaración de una función flecha

var, let, const

const- buena práctica utilizar let para declarar funciones flecha 
o lambda

-nombreFuncion

-Parámetros 

-Establecer el bloque de código o procesos que va a ejecutar esta función

=> - Fat arrow

*/

function funcionNormal (parametro ){
return "Hola " + parametro;

}

const funcionFlecha = parametro => "Hola " + parametro;

// Funciones flecha con más parámetros

const funcionVariosParametros = (datoA, datoB) => {
    let datoC = datoA + datoB;

    return "La suma de datoA + datoB =" + datoC;




}

// Función Flecha sin recibir ningún Parámetro

const funcionSinParametro = () => {
    return "Funcion flecha que no recibe parametros";


}


/////////////////////////////////////

//Función flecha para calcular la velocidad

const calcularVelocidadFlecha = (distanciaFlecha, tiemploFlecha) => {
  console.log("Distancia = " + distanciaFlecha + " metros");
  console.log("Tiempo = " + tiemploFlecha + " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiemploFlecha + "m/s";






}

// const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
    
//     console.log("Distancia =  " + distanciaFlecha + " metros");
//     console.log("Tiempo = " + tiempoFlecha + " segundos");
//     return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
// }



/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/


///////////////////////

// Cuadrado de un número

const calcularCuadradoNumeroFlecha = (numero ^ 2) => {

  Math.pow(7.2);
        return "El numero calculado es= " + numero * ^2; 


}


// const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
    
//     console.log("Distancia =  " + distanciaFlecha + " metros");
//     console.log("Tiempo = " + tiempoFlecha + " segundos");
//     return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
// }


//////////////

// Volumen de un cubo

const calcularVolumenCuboFlecha = (ladoX, ladoY,  ladoZ) => {

        console.log("Base = " + ladoX + " metros");
        console.log("Altura = " + ladoY + " metros");
        console.log("Profundidad = " + ladoZ + " metros");
return " El volumen del cubo es = " + ladoX * ladoY * ladoZ + "metros";


}


const volumenCubo = (datoA, datoB, datoC) => {
    let volumen = datoA * datoB * datoC;

    return "La multiplicación de datoA * datoB  * datoC ";






}