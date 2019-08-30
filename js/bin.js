function mudar() {
    var numero = document.getElementById('numero').value
    var base = document.getElementById('base').value
    var resultado = document.getElementById("resultado")
    var num = parseInt(numero)
    if (base == "decimal") {
        var rs = (num).toString(10)
        resultado.innerText = "Valor na base " + base + " = " + rs;
    } else {
        if (base == "octal") {
            var rs = (num).toString(8)
            resultado.innerText = "Valor na base " + base + " = " + rs;

        } else {
            var rs = (num).toString(16)
            resultado.innerText = "Valor na base " + base + " = " + rs;

        }
    }
}