function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    var num = parseInt(numero)
    if (base == "Binária") {
        var rs = parseInt(numero, 8).toString(2);
        if (isNaN(rs)) {
            resultado.innerText = "Valor incorreto"
        } else {
            resultado.innerText = "Valor na base " + base + " = " + rs
        }
    } else {
        if (base == "Decimal") {
            var rs = parseInt(numero, 8).toString(10);
            if (isNaN(rs)) {
                resultado.innerText = "Valor incorreto"
            } else {
                resultado.innerText = "Valor na base " + base + " = " + rs
            }
        } else {
            if (base == "Hexadecimal") {
                var rs = parseInt(numero, 8).toString(16);
                if (isNaN(rs)) {
                    resultado.innerText = "Valor incorreto"
                } else {
                    resultado.innerText = "Valor na base " + base + " = " + rs
                }
            }
        }
    }
}