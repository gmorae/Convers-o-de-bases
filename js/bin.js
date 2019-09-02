function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    var num = parseInt(numero)
    if (base == "Decimal") {
        var rs = parseInt(num, 2).toString(10);
        if (isNaN(rs)) {
            resultado.innerText = "Valor incorreto"
        } else {
            resultado.innerText = "Valor na base " + base + " = " + rs
        }
    } else {
        if (base == "Octal") {
            var rs = parseInt(num, 2).toString(8);
            if (isNaN(rs)) {
                resultado.innerText = "Valor incorreto"
            } else {
                resultado.innerText = "Valor na base " + base + " = " + rs
            }
        } else {
            if (base == "Hexadecimal") {
                var rs = parseInt(num, 2).toString(16);
                if (isNaN(rs)) {
                    resultado.innerText = "Valor incorreto"
                } else {
                    resultado.innerText = "Valor na base " + base + " = " + rs
                }
            }
        }
    }
}