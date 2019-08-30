function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    var num = parseInt(numero)
    if (base == "decimal") {
        var dec = parseInt(numero, 2).toString(10);
        resultado.innerText = "Valor na base " + base + " = " + rs;
    } else {
        if (base == "octal") {
            var dec = parseInt(numero, 2).toString(8);
            resultado.innerText = "Valor na base " + base + " = " + rs;

        } else {
            if (base == "hexadecimal") {
                var dec = parseInt(numero, 2).toString(16);
                resultado.innerText = "Valor na base " + base + " = " + rs;

            } else {
                resultado.innerText = "Algo de errado não está certo"

            }

        }
    }
}