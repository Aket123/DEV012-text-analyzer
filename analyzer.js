const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //Te falta excluir números
    let conteo = 0;
    conteo = text.trim().split(/\s+/).length;
    return conteo;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let resultado = 0;
    resultado = text.length;
    return resultado;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    // La "g" después de la expresión regular es una opción o indicador que realiza una búsqueda global, buscando en toda la cadena y devolviendo todas las coincidencias.
    let caracteresSinEspacio = 0;
    caracteresSinEspacio = text
      .trim()
      .replace(/[.,/#!¡¿?$%^&*;:{}=\-_`~()\s]/g, "").length;
    return caracteresSinEspacio;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let conteopalabras = 0;
    conteopalabras = text.trim().split(/\s+/);
    const operacion = conteopalabras.reduce(
      (total, word) => total + word.length,
      0
    );
    const longitud = operacion / conteopalabras.length;
    return parseFloat(longitud.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //Recuerda el for
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);

    if (numeros === null) {
      return 0;
    } else {
      return numeros.length;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // la expresión regular es para las decimales
    const sumanumeros = text.match(/\b\d+(\.\d+)?\b/g);
    let suma = 0;
    if (sumanumeros === null) {
      return 0;
    } else {
      for (let i = 0; i < sumanumeros.length; i++) {
        const sumacompleta = sumanumeros[i];
        if (!isNaN(parseFloat(sumacompleta))) {
          suma += parseFloat(sumacompleta, 10);
        }
      }
    }
    return suma;
  },
};

export default analyzer;
