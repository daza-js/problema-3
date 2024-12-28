# Calculadora de MCD y mcm

Este proyecto es una aplicación de consola en Node.js que permite calcular el **Máximo Común Divisor (MCD)** y el **Mínimo Común Múltiplo (mcm)** de dos números enteros positivos ingresados por el usuario.

## Descripción

La aplicación realiza las siguientes tareas:

1. Solicita al usuario dos números enteros positivos.
2. Calcula el MCD usando el algoritmo de Euclides.
3. Calcula el mcm usando la relación matemática: `mcm(a, b) = (a * b) / MCD(a, b)`.
4. Muestra los resultados al usuario en la consola.

## Características

- Validación de entrada: Si el usuario ingresa valores no numéricos o negativos, la aplicación solicita nuevamente la entrada.
- Uso interactivo: Gracias al módulo `readline`, el usuario puede interactuar fácilmente con la aplicación en la consola.

## Código Principal

El cálculo del MCD se realiza utilizando el **algoritmo de Euclides**, que consiste en realizar divisiones sucesivas hasta que el resto sea cero. El mcm se calcula a partir de la relación conocida con el MCD.

### Función para calcular el MCD

```javascript
function calcularMCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
```

### Función para calcular el mcm

```javascript
function calcularMCM(a, b) {
  return (a * b) / calcularMCD(a, b);
}
```

### Flujo de la aplicación

1. Se captura la entrada del usuario mediante `readline`.
2. Los datos se validan para asegurar que sean números enteros positivos.
3. Se realizan los cálculos del MCD y el mcm.
4. Los resultados se imprimen en la consola.

## Ejemplo de Ejecución

```bash
Calculadora de MCD y mcm

Ingrese el primer número entero positivo: 12
Ingrese el segundo número entero positivo: 18

El Máximo Común Divisor (MCD) de 12 y 18 es: 6
El Mínimo Común Múltiplo (mcm) de 12 y 18 es: 36
```
