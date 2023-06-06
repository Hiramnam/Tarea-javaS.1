//----------------------Actividad----------------------------------------

//Realizar una función que realice o saatisfaga los siguientes escenarios, en manera de función general y funcion flecha.

//1. Calcular el cuadrado de un número.

//Función general
function calcularCuadradoGeneral(numero) {
    return numero * numero;
  }
  //Función flecha
  const calcularCuadradoFlecha = numero => numero * numero;
  
  
  //2. Escribir un código que convierta de grados celsius a grados farenheit
  
  //Función general
  function celsiusFahrenheitGeneral(celsius) {
      return (celsius * 9/5) + 32;
    }
  
  //Función flecha
  const celsiusFahrenheitFlecha = celsius => (celsius * 9/5) + 32;
  
  
  //3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.
  
  //Función general
  function calcularVoltajeGeneral(resistencia, corriente) {
      return resistencia * corriente;
    }
  
  //Función flecha
  const calcularVoltajeFlecha = (resistencia, corriente) => resistencia * corriente;
  
  
  //4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.
  
  //Función general
  function calcularVolumenCuboGeneral(lado) {
      return lado * lado * lado;
    }
  
  //Función flecha
  const calcularVolumenCuboFlecha = lado => lado * lado * lado;
  
  
  //5. Calcular el área de un triángulo
  
  //Función general
  function calcularAreaTrianguloGeneral(base, altura) {
      return (base * altura) / 2;
    }
  
  //Función flecha
  const calcularAreaTrianguloFlecha = (base, altura) => (base * altura) / 2;
  
  
  //6. Calcular el volumen de una esfera
  
  //Función general
  function calcularVolumenEsferaGeneral(radio) {
      return (4/3) * (3.1416) * (radio * radio * radio);
    } 
  
  //Función flecha
  const calcularVolumenEsferaFlecha = radio => (4/3) * (3.1416) * (radio * radio * radio);
  
  
  //7. Convertir una cadena de texto a mayúsculas, usando el método toUpperCase().
  
  //Función general
  function convertirAMayusculasGeneral(texto) {
      return texto.toUpperCase();
  } 
  
  //Función flecha
  const convertirAMayusculasFlecha = texto => texto.toUpperCase();

  