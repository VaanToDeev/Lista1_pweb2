let altura = parseFloat( prompt("Digite sua altura: "))
let peso = parseFloat( prompt("Digite seu peso: "))
let IMC = peso/(altura*altura)
alert(`Seu IMC é ${IMC}`)

if (IMC < 18.5) {
  alert("Você está abaixo do peso.");
} else if (IMC >= 18.5 && IMC < 24.9) {
  alert("Você está com o peso normal.");
} else if (IMC >= 25 && IMC < 29.9) {
  alert("Você está com sobrepeso.");
} else if (IMC >= 30 && IMC < 34.9) {
  alert("Você está com obesidade Grau I.");
} else if (IMC >= 35 && IMC < 39.9) {
  alert("Você está com obesidade Grau II.");
} else {
  alert("Você está com obesidade Grau III ou mórbida.");
}