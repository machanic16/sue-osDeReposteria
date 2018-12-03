const dulces = document.getElementById('dulces')
const contacto = document.getElementById('contacto')
const info = document.getElementById('info')
var totalScroll = 0
const PosisionDeDulces = 550 //las variedades de dulces se ubican a esta cantidad de pixeles
const PosisionDeContactos = 1200 //lo mismo ocurre aqui



function agregarEventos ()
{
    dulces.addEventListener('click',scrollDulces)
    contacto.addEventListener('click',scrollContacto)
    info.addEventListener('click',scrollInfo)
}

function scrollDulces()
{
    window.scrollBy(0,15)
    totalScroll+= 15
    if(totalScroll < PosisionDeDulces)
    {
        setTimeout(() => scrollDulces(),10)

    }else{
        totalScroll = 0
    }
}


function scrollContacto()
{
    window.scrollBy(0,25)
    totalScroll+= 25
    console.log(totalScroll)
    if(totalScroll < PosisionDeContactos)
    {
        setTimeout(() => scrollContacto(),10)

    }else{
        totalScroll = 0
    }
}

function scrollInfo()
{
    window.scrollBy(0,25)
    totalScroll+= 25
    if(totalScroll < 550)
    {
        setTimeout(() => scrollInfo(),10)

    }else{
        totalScroll = 0
    }
}

agregarEventos()