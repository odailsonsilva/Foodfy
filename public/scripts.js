const articles = document.querySelectorAll('article')
const btnME = document.querySelector('.btn-esconder')
// funcoes para mandar de receitas -> receita

for(let article of articles){
    article.addEventListener("click", function(){
        const receitaID = article.getAttribute("id")
        window.location.href = `/receita?id=${receitaID}`
    })
}

// funcoes para esconder btn-esconder
function btnMostrar(id, btn){
    if(document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.display = 'block'
        document.getElementById(btn).innerHTML = "ESCONDER"

    }else{
        document.getElementById(id).style.display = 'none'
        document.getElementById(btn).innerHTML = "MOSTRAR"
    }
}