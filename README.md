# Analizador de texto

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Diseño y prototipo](#5-diseño-y-prototipo)

## 1. Consideraciones generales

El presente proyecto fue realizado de manera individual con el uso exclusivo de JavaScript puro.

## 2. Preámbulo

Este analizador de texto es una aplicación que proporciona una variedad de métricas que brindan
información básica, entre ellas:
 1. Conteo de palabras
 2. Conteo de caracteres
 3. Conteo de caracteres sin contar espacios y signos de puntuación
 4. Conteo de números
 5. Suma de números  
 6. Longitud media de palabras

Los analizadores de texto auxilian al usuario(a) a tomar decisiones informadas y sacar conclusiones significativas, que genera una comprensión más profunda de los textos.

## 3. Resumen del proyecto

Esta aplicación puede realizar un análisis en tiempo real sobre el texto ingresado por el usuario(a), mostrando una serie de indicadores y métricas específicas sobre caracteres, letras, números, etc. 

## 4. Funcionalidades

Las funcionalidades se enlistan enseguida:

1. El cuadro de texto permite ingresar una oración escrita al momento, o copiada y pegada en dicho espacio.

2. La aplicación calcula las siguientes métricas y actualizar el
resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Recuento de palabras**: Contabiliza el número de palabras en el texto de entrada y muestra este recuento al usuario(a).
    - **Recuento de caracteres**: Contabiliza el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    Contabiliza el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación.
    - **Recuento de números**: Contabiliza el recuento de números que hay en el texto de entrada.
    - **Suma total de números**: Realiza la suma de todos los números que hay en el texto de entrada.
    - **Longitud media de las palabras**: Calcula la
    longitud media de las palabras en el texto ingresado.
3. Es popsible borrar el área del texto y reiniciar los datos ingresados, a través del botón "Comienza de nuevo".
## 5. Diseño y prototipo
El diseño del Analizador de texto fue pensado tomando en cuenta al usuario y su navegación por la aplicación, además de los requerimientos de aceptación y requisitos del proyecto. Se utilizó Figma para realizar el prototipo de baja fidelidad como guía inicial del proyecto.
![](/images/Prototipo.png)
Bajo la lógica de JavaScript y la aplicación de estilos utilizando CSS. El resultado final es el siguiente: 
![](/images/Navegador.png) 