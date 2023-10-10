const numero = parseInt(prompt("Insira um número para calcular o fatorial:"))

if (numero < 0) {
  document.write("O fatorial não está definido para números negativos.")
} else if (numero === 0) {
  document.write("O fatorial de 0 é 1.")
} else {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  document.write(`O fatorial de ${numero} é ${fatorial}.`)
}
