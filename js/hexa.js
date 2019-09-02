function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    if (base == "Binária") {
        var hexa = parseInt(numero, 16).toString(2)
        if (isNaN(hexa)) {
            resultado.innerText = "Valor incorreto"
        } else {
            resultado.innerText = "Valor na base " + base + " = " + hexa
        }
    } else {
        if (base == "Octal") {
            var hexa = parseInt(numero, 16).toString(8)
            if (isNaN(hexa)) {
                resultado.innerText = "Valor incorreto"
            } else {
                resultado.innerText = "Valor na base " + base + " = " + hexa
            }
        } else {
            if (base == "Decimal") {
                var hexa = parseInt(numero, 16).toString(10)
                if (isNaN(hexa)) {
                    resultado.innerText = "Valor incorreto"
                } else {
                    resultado.innerText = "Valor na base " + base + " = " + hexa
                }
            }
        }
    }
}