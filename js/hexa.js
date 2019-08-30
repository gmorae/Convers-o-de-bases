function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    if (base == "binario") {
        var hex = numero;
        var dec = parseInt(hex, 16).toString(2);
        resultado.innerText = "Valor na base " + base + " = " + dec;
    } else {
        if (base == "octal") {
            var hex = numero;
            var dec = parseInt(hex, 16).toString(8);
            resultado.innerText = "Valor na base " + base + " = " + dec;
        } else {
            var hex = numero;
            var dec = parseInt(hex, 16).toString(10);
            resultado.innerText = "Valor na base " + base + " = " + dec;

        }
    }
}