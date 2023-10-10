
const palavra = prompt("Insira uma palavra para verificar se é um palíndromo:")


const palavraSemEspacos = palavra.replace(/\s/g, '').toLowerCase()


const palavraInvertida = palavraSemEspacos.split('').reverse().join('')

if (palavraSemEspacos === palavraInvertida) {
  document.write(`"${palavra}" é um palíndromo.`)
} else {
    document.write(`"${palavra}" não é um palíndromo.`)
}
