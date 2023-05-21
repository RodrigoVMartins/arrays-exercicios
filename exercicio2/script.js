/* Com os arrays criados no exercício 1, vamos fazer algumas observações. 
Faça o que se pede abaixo, utilizando `console.log()`: */

const arrayNumbers = [2, 4, 3, 534, 43, 54]
const arrayStrings = ["Olá", "Carro", "Gato"]
const arrayMisto = [18, "Gato", true, 21, "Farofa", false]

// Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).
console.log(arrayNumbers.length);
console.log(arrayStrings.length);
console.log(arrayMisto.length); 

// Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log("Primeiro item do primeiro array", arrayNumbers[0]);
console.log("Segundo item do segundo array", arrayStrings[1]);
console.log("Terceiro item do terceiro array", arrayMisto[2]);

/* **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas
verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um
booleano **false**. */
console.log("Incluido no primeiro array: ", arrayNumbers.includes(3));
console.log("Incluido no segundo array: ", arrayMisto.includes("Bicho"));