var agora = new Date
var hora = agora.getHours()
console.log(`Agora são exatamento ${hora} horas.`)
if (hora < 12)
    console.log('Bom dia !')
else if (hora <= 18)    
    console.log('Bom Tarde !')
else
    console.log('Bom Noite !')