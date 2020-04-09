function contar() {
    var txtInicio = window.document.getElementById('txtInicio')
    var txtFim = window.document.getElementById('txtFim')
    var txtPasso = window.document.getElementById('txtPasso')
    var divResultado = window.document.getElementById('divResultado')
    var passo = 1

    if ((txtInicio.value.length == 0) || (txtFim.value.length == 0) || (txtPasso.value.length == 0)) {
        divResultado.innerHTML = 'Impossível Contar !! <br> Revise os Dado Informados !!!'
    }
    else {
        if (Number(txtPasso.value) == 0) {
            alert('PASSO inválido ! Considerado PASSO 1 ');
        }
        else {
            passo = Number(txtPasso.value)
            if (passo < 0) {
                passo *= -1
            }
        }

        var inicio = Number(txtInicio.value)
        var fim = Number(txtFim.value)
        divResultado.innerHTML = 'Contando:<br>'

        if (inicio <= fim) {
            for (var i = inicio; i <= fim; i += passo) {
                divResultado.innerText = divResultado.innerText + `${i}\u{1F449}`
            }
        } else {
            for (var i = inicio; i >= fim; i -= passo) {
                divResultado.innerText = divResultado.innerText + `${i}\u{1F449}`
            }
        }

        divResultado.innerText = divResultado.innerText + `\u{1F3C1}`
    }

}
