
const articles = document.querySelectorAll('article')
const btnEsconder = document.querySelectorAll('.btn-esconder')

// funcoes para esconder btn-esconder


// funcoes para mandar de receitas -> receita

for(let article of articles){
    article.addEventListener("click", function(){
        const receitaID = article.getAttribute("id")
        window.location.href = `/receita?id=${receitaID}`
    })
}

for(let btn of btnEsconder){
    btn.addEventListener("click", function(){
        const divAnimacao = document.querySelector(".div-animacao")
    
        if(btn.innerHTML == "MOSTRAR" ){
            btn.innerHTML = "ESCONDER" 
            divAnimacao.classList.remove("alt")
        }else if(btn.innerHTML == "ESCONDER"){
            btn.innerHTML = "MOSTRAR" 
            divAnimacao.classList.add("alt")
        }
    })
}



// btnEsconder.addEventListener("click", function(){
//     const divAnimacao = document.querySelector(".div-animacao")

//     if(btnEsconder.innerHTML == "MOSTRAR" ){
//         btnEsconder.innerHTML = "ESCONDER" 
//         divAnimacao.classList.remove("alt")
//     }else if(btnEsconder.innerHTML == "ESCONDER"){
//         btnEsconder.innerHTML = "MOSTRAR" 
//         divAnimacao.classList.add("alt")
//     }
// })