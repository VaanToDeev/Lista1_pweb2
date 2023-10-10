const numeros = []
num1 = parseInt( prompt("Digite o 1° numero"))
num2 = parseInt( prompt("Digite o 2° numero"))
num3 = parseInt( prompt("Digite o 3° numero"))

numeros.push(num1)
numeros.push(num2)
numeros.push(num3)

const maiorNumero = Math.max(...numeros)

alert("O maior numero é: " + maiorNumero)