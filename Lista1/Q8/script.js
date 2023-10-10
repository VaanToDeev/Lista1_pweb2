let numero = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let acertos = false;

do {
  const palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
  tentativas++;

  if (palpite === numero) {
    acertos = true;
    alert(`Você acertou o número ${numero} em ${tentativas} tentativas.`);
  } else {
    alert("Tente denovo.");
  }
} while (!acertos);
