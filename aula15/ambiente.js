let numero = [5,8,9,3]
console.log(numero)
console.log(`nosso vetor é o ${numero}`)
numero[4] = 4 // Colocando por idice
console.log(`nosso vetor é o ${numero}`)
numero.push(7) // via comando interno
console.log(`nosso vetor é o ${numero}`)

//length não é metodo sim atributo
console.log(`Total de elementos do vetor: ${numero.length}`)
numero.sort() // Ordena o elemento
console.log(`nosso vetor é o ${numero}`)
console.log(`Posição 2: ${numero[2]}`)

valores = [5, 9, 4, 1, 0, 8]

// percorrer o vetor
console.log(valores)
for(let pos=0; pos <= valores.length; pos++){
    console.log(`A posiçãp ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores) {
    console.log(`valor ${pos}`)
}
// Buscar valores
let pos = valores.indexOf(4)
console.log(`valor 4 esta na posicoa ${pos}`)
pos = valores.indexOf(3)
if (pos == -1)
  console.log(`valor 3 não foi encontrado`)
else 
  console.log(`valor 3 esta na posicoa ${pos}`)
  