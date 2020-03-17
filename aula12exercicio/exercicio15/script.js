function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtanonascimento = document.getElementById('txtanonascimento')
    var divresultado = window.document.getElementById('divresultado')
    if (txtanonascimento.value.length == 0 || Number(txtanonascimento.value) > ano) {
        window.alert('[Erro]! Verifique seu Ano de Nascimento !!')
    } else {
        var radsexo = document.getElementsByName('radsexo')
        var idade = ano - Number(txtanonascimento.value)
        var genero = ''
        var imgfoto = document.createElement('img')
        imgfoto.setAttribute('id', 'imgfoto')

        if (radsexo[0].checked) {
            genero = 'Homem'
            if (idade > 00 && idade < 10) {// Criança
                imgfoto.setAttribute('src', 'fotos/foto-bebe-m.png')
            } else if (idade < 21) {
                imgfoto.setAttribute('src', 'fotos/foto-jovem-m.png')
            } else if (idade < 60) {
                imgfoto.setAttribute('src', 'fotos/foto-adulto-m.png')
            } else {
                imgfoto.setAttribute('src', 'fotos/foto-idoso-m.png')
            }
        }
        else if (radsexo[1].checked) {
            genero = 'Mulher'
            if (idade > 00 && idade < 10) {// Criança
                imgfoto.setAttribute('src', 'fotos/foto-bebe-f.png')
            } else if (idade < 21) {
                imgfoto.setAttribute('src', 'fotos/foto-jovem-f.png')
            } else if (idade < 60) {
                imgfoto.setAttribute('src', 'fotos/foto-adulto-f.png')
            } else {
                imgfoto.setAttribute('src', 'fotos/foto-idoso-f.png')
            }
        }
        divresultado.style.textAlign = 'Center'
        divresultado.innerHTML = `Detectamos ${genero} com ${idade} ano(s)`
        divresultado.appendChild(imgfoto)
    }
}

