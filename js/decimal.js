function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    var num = parseInt(numero)
    if (base == "Binária") {
        var rs = (num).toString(2)
        if (isNaN(rs)) {
            resultado.innerText = "Valor incorreto"
        } else {
            resultado.innerText = "Valor na base " + base + " = " + rs
        }
    } else {
        if (base == "Octal") {
            var rs = (num).toString(8)
            if (isNaN(rs)) {
                resultado.innerText = "Valor incorreto"
            } else {
                resultado.innerText = "Valor na base " + base + " = " + rs
            }
        } else {
            if (base == "Hexadecimal") {
                var rs = (num).toString(16)
                if (isNaN(rs)) {
                    resultado.innerText = "Valor incorreto"
                } else {
                    resultado.innerText = "Valor na base " + base + " = " + rs
                }
            }
        }
    }
}