const dulces = document.getElementById('dulces')
const contacto = document.getElementById('contacto')
const info = document.getElementById('info')
const toggle = document.getElementById('toggleMenu')
const menu = document.getElementById('menu')
var totalScroll = 0
const PosisionDeDulces = 550 //las variedades de dulces se ubican a esta cantidad de pixeles
const PosisionDeContactos = 1900 //lo mismo ocurre aqui

function agregarEventos() {
    dulces.addEventListener('click', () => {
        scroll(15, PosisionDeDulces, 10)
    })
    contacto.addEventListener('click', () => {
        scroll(25, PosisionDeContactos, 7)
    })
    info.addEventListener('click', () => {
        scroll(25, PosisionDeContactos, 10)
    })

    toggle.addEventListener('click', toggleMenu)

}

function scroll(saltos, posicionDeseada, frecuencia) {
    
    window.scrollBy(0, 15)
    totalScroll += saltos
    console.log(totalScroll)
    if (totalScroll < posicionDeseada) {
        console.log('entro al condicional')
        setTimeout(() => scroll(saltos, posicionDeseada, frecuencia), frecuencia)
        console.log(totalScroll)
    } else {
        totalScroll = 0
    }
}

function toggleMenu()
    {
        if (menu.classList.contains('toggleMenu')) {
        console.log(' si tiene')
        menu.classList.remove('toggleMenu')
    } else {
        console.log('no la tiene')
        menu.classList.add('toggleMenu')
    }
}

agregarEventos()