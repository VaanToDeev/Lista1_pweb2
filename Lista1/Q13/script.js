var somaNotas = 0;


for (var i = 1; i <= 5; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + ":"));

    
    if (isNaN(nota)) {
        alert("Por favor, insira um número válido para a nota.");
        i--; 
    } else {
        somaNotas += nota; 
    }
}

var media = somaNotas / 5;

document.write("A média das notas é: " + media.toFixed(2));
