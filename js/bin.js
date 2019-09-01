function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    var num = parseInt(numero)
    if (base == "Decimal") {
        var rs = parseInt(num, 2).toString(10);
        resultado.innerText = "Valor na base " + base + " = " + rs;
    } else {
        if (base == "Octal") {
            var rs = parseInt(num, 2).toString(8);
            resultado.innerText = "Valor na base " + base + " = " + rs;
        } else {
            if (base == "Hexadecimal") {
                var rs = parseInt(num, 2).toString(16);
                resultado.innerText = "Valor na base " + base + " = " + rs;
            } else {
                resultado.innerText = "Algo de errado não está certo"
            }
        }
    }
}