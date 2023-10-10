var numero = parseInt(prompt("Digite um número:"));


if (numero <= 1) {
    console.log("O número não é primo.");
} else {
    var i = 2;
    var primo = true;

  
    while (i < numero) {
        if (numero % i === 0) {
            primo = false;
            break; 
        }
        i++;
    }

    if (primo) {
        document.write("O número é primo.");
    } else {
        document.write("O número não é primo.");
    }
}
