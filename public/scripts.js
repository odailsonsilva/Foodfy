// funcoes para esconder btn-esconder
const btnME = document.querySelector('.btn-esconder')
function btnMostrar(id, btn){
    if(document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.display = 'block'
        document.getElementById(btn).innerHTML = "ESCONDER"

    }else{
        document.getElementById(id).style.display = 'none'
        document.getElementById(btn).innerHTML = "MOSTRAR"
    }
}

//funcao deixar ativo pg atual
const paginaAtual = location.pathname
const menuitems  = document.querySelectorAll(".menu-principal .links a")

for(item of menuitems) {
  if(paginaAtual.includes(item.getAttribute("href"))){
    item.classList.add("active")
  }
}