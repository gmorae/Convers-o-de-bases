function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    var num = parseInt(numero)
    if (base == "binario") {
        var rs = parseInt(numero, 8).toString(2);
        resultado.innerText = "Valor na base " + base + " = " + rs;
    } else {
        if (base == "decimal") {
            var rs = parseInt(numero, 8).toString(10);
            resultado.innerText = "Valor na base " + base + " = " + rs;

        } else {
            if (base == "hexadecimal") {
                var rs = parseInt(numero, 8).toString(16);
                resultado.innerText = "Valor na base " + base + " = " + rs;

            } else {
                resultado.innerText = "Algo de errado não está certo"

            }

        }
    }
}