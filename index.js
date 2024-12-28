// Importar el módulo readline para capturar la entrada del usuario
const readline = require('readline');

// Crear la interfaz de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para calcular el Máximo Común Divisor (MCD) usando el 
// algoritmo de Euclides
function calculateGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Función para calcular el Mínimo Común Múltiplo (mcm)
function calculateLCM(a, b) {
  return (a * b) / calculateGCD(a, b);
}

// Función principal para capturar los números del usuario
promptNumbers();
function promptNumbers() {
  rl.question('Ingrese el primer número entero positivo: ', (num1) => {
    rl.question('Ingrese el segundo número entero positivo: ', (num2) => {
      const number1 = parseInt(num1, 10);
      const number2 = parseInt(num2, 10);

      if (isNaN(number1) || isNaN(number2) || number1 <= 0 || number2 <= 0) {
        console.log('Por favor ingrese 2 números positivos.');
        promptNumbers(); // Solicitar nuevamente si hay un error
      } else {
        const gcd = calculateGCD(number1, number2);
        const lcm = calculateLCM(number1, number2);

        console.log(`\nEl Máximo Común Divisor  (MCD) de ${number1} y ${number2} es: ${gcd}`);
        console.log(`El Mínimo Común Múltiplo  (MCM) de ${number1} y ${number2} es: ${lcm}`);

        rl.close();
      }
    });
  });
}

// Mostrar un mensaje de inicio
console.log("Calculadora de MCD y mcm\n");