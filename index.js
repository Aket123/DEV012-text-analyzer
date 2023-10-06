import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Borrar información
const button = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="user-input"]');
button.addEventListener("click", function () {
  textarea.value = "";
});

// METRICAS

// 1.Número de caracteres
textarea.addEventListener("input", function () {
  const numeroCaracteres = analyzer.getCharacterCount(textarea.value);
  document.querySelector("li.metrica:nth-child(2)").textContent =
    "Caracteres: " + numeroCaracteres;
  // 2.Número de palabras
  const wordCount = analyzer.getWordCount(textarea.value);
  document.querySelector("li.metrica:nth-child(1)").textContent =
    "Palabra: " + wordCount;
  // 3.Caracteres excluyendo espacios y signos de puntuación
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(
    textarea.value
  );
  document.querySelector("li.metrica:nth-child(3)").textContent =
    "Caracteres sin espacios ni de puntuación: " +
    characterCountExcludingSpaces;
  // 4.Recuento de números
  const numberCount = analyzer.getNumberCount(textarea.value);
  document.querySelector("li.metrica:nth-child(4)").textContent =
    "Números: " + numberCount;
  // 5.Suma total de números
  const numbersum = analyzer.getNumberSum(textarea.value);
  document.querySelector("li.metrica:nth-child(5)").textContent =
    "Suma de números: " + numbersum;
  // 6.Longitud media de palabras
  const wordlengthaverage = analyzer.getAverageWordLength(textarea.value);
  document.querySelector("li.metrica:nth-child(6)").textContent =
    "Longitud media de palabras: " + wordlengthaverage;
});
