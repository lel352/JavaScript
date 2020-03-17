function carregar() {
    var divmsg = window.document.getElementById('divmsg')
    var imgfoto = window.document.getElementById('imgfoto')
    var data = new Date()
    var hora = data.getHours()
    divmsg.innerHTML = `Agora são ${hora} Hora(s).`    
    if (hora >= 0 && hora < 12){
        imgfoto.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        imgfoto.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        imgfoto.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }

}