function tabuada(){
    var txtNumero = window.document.getElementById('txtNumero')
    if (txtNumero.value.length == 0){
        alert('Por favor digite um número !')
    }
    else {
        var numero = Number(txtNumero.value)
        var lstResultado = window.document.getElementById('lstResultado') 
        lstResultado.innerText = ''
        for (var i = 1; i <= 10; i++){            
            var option = document.createElement("option")
            option.text = `${numero} x ${i} = ${numero * i}`
            lstResultado.appendChild(option)
        }
    }
}