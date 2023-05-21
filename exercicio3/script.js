/* Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**,
chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um
array **meusNumerosCopia**, e assim por diante. */

const arrayNumbers = [2, 4, 3, 534, 43, 54]
const arrayStrings = ["Olá", "Carro", "Gato"]
const arrayMisto = [18, "Gato", true, 21, "Farofa", false]

const arrayNumbersCopia = arrayNumbers.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistoCopia = arrayMisto.slice()


// Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayNumbersCopia.unshift(10)
console.log(arrayNumbersCopia);
console.log(arrayNumbers);

// Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
arrayStringsCopia.pop()
console.log(arrayStringsCopia);
console.log(arrayStrings);

// Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayMistoCopia.splice(1, 1)
console.log(arrayMistoCopia);
console.log(arrayMisto);
