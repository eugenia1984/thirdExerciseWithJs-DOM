// Aplicar color de fondo #fcf79f a todo el documento
document.body.style.backgroundColor = '#fcf79f'

// Aplicar color de fondo #0ca001 -verde- a todos los párrafos (etiqueta p) 
var colorVerde = document.getElementsByTagName('p')
colorVerde[0].style.color = '#0ca001'
colorVerde[1].style.color = '#0ca001'
colorVerde[2].style.color = '#0ca001'
colorVerde[3].style.color = '#0ca001'
colorVerde[4].style.color = '#0ca001'

//Aumenta el tamaño de la fuente a 24px, solo el elemento con id="destacado"

var tamanoFuente = document.getElementById('destacado')
tamanoFuente.style.fontSize = '24px'

// Cambia la familia tipográfica por Arial a los títulos (h2)

var familiaTipografica = document.getElementsByTagName('h2')
familiaTipografica[0].style.fontFamily = 'arial'
familiaTipografica[1].style.fontFamily = 'arial'


// Crear un vínculo con referencia: https://www.lipsum.com

var vinculo1 = document.getElementById('lipsum')
vinculo1.innerHTML = `Visita la web : <a href="https://www.lipsum.com" target="_blank"> lipsum.com  </a>`