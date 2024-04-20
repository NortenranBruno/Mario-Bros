
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostraform(){
     form.style.left = "50%"
     form.style.transform = "transaltex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform(){
    form.style.left = "-300%"
    form.style.transform = "transaltex(0)"
   mascara.style.visibility = "hidden"
}