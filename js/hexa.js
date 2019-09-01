function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    if (base == "Binária") {
        var dec = parseInt(numero, 16).toString(2)
        if (Number.isNaN == true) {
            resultado.innerText = "Valor está incorreto"
        } else {
            resultado.innerText = "Valor na base " + base + " = " + dec;
        }
    } else {
        if (base == "Octal") {
            var dec = parseInt(numero, 16).toString(8);
            if (Number.isNaN == true) {
                resultado.innerText = "Valor está incorreto"
            } else {
                resultado.innerText = "Valor na base " + base + " = " + dec;
            }
        } else {
            if (base == "Decimal") {
                var dec = parseInt(numero, 16).toString(10);
                if (Number.isNaN == true) {
                    resultado.innerText = "Valor está incorreto"
                } else {
                    resultado.innerText = "Valor na base " + base + " = " + dec;
                }
            }
        }
    }
}