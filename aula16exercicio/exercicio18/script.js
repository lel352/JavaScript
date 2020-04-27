var listaValores = []

function isNumero(txtCampo){
    if (txtCampo.length == 0) {
        return false
    }    
    return true
}

function inlist(txtCampo, valores){
    if (valores.indexOf(txtCampo) != -1) {
        return true
    }
    return false
}

function validarAdicionar(txtCampo, valores) {
    if (!isNumero(txtCampo)) {
        alert('Valor Inválido !')
        return false
    }
    if ((Number(txtCampo) < 0) || (Number(txtCampo) > 100)) {
        alert('Valor não se encontra Entre 0 e 100 !')
        return false
    }
    if (inlist(Number(txtCampo), valores)) {
        alert(`Valor ${Number(txtCampo)} já foi adicionado !`)
        return false
    }
    return true
}

function validarFinalizar() {
    if (listaValores.length <= 0) {
        alert(`Adicione Valores antes de finalizar`)
        return false
    }
    return true
}

function adicionar() {    
    let txtNumero = window.document.querySelector('input#txtNumero')    
    if (validarAdicionar(txtNumero.value, listaValores)) {
        let lstValores = window.document.getElementById('lstValores')
        let divResultado = window.document.getElementById('divResultado')
        let item = document.createElement("option")
        item.text = `Valor ${txtNumero.value} adicionado. `
        lstValores.appendChild(item)
        listaValores.push(Number(txtNumero.value))
        divResultado.innerHTML = ''
    }
    txtNumero.value = ''
    txtNumero.focus()    
}

function finalizar() {
    if (validarFinalizar()) {
        let divResultado = window.document.getElementById('divResultado')
        /*let valorTotal = listaValores.reduce(function (anterior, atual) {
            return anterior + atual;
        });
        //Função abaixo versão simplificada arrow*/
        let valorTotal = listaValores.reduce((anterior, atual) => anterior + atual);
        let media = valorTotal / listaValores.length

        divResultado.innerHTML = `<p> Ao todo, temos ${listaValores.length} número(s) cadastrado(s). </p>`
        divResultado.innerHTML = divResultado.innerHTML + `<p> Maior valor informado foi ${Math.max.apply(null, listaValores)}. </p>`
        divResultado.innerHTML = divResultado.innerHTML + `<p> Menor valor informado foi ${Math.min.apply(null, listaValores)}. </p>`
        divResultado.innerHTML = divResultado.innerHTML + `<p> Somando todos os valores, temos ${valorTotal}. </p>`
        divResultado.innerHTML = divResultado.innerHTML + `<p> A média do valores digitados é ${media}. </p>`
    }
}