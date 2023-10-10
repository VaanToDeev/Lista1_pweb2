// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let tentativaUsuario

while (true) {
  
  tentativaUsuario = parseInt(prompt("Adivinhe o numero (entre 1 e 100):"))
  tentativas++;

  if (tentativaUsuario === numeroAleatorio) {
    alert(`Você acertou o número ${numeroAleatorio} em ${tentativas} tentativa(s).`)
    break;
  } else if (tentativaUsuario < numeroAleatorio) {
    alert("Tente um número maior.")
  } else {
    alert("Tente um número menor.")
  }
}
