
const articles = document.querySelectorAll('article')


for(let article of articles){
    article.addEventListener("click", function(){
        const receitaID = article.getAttribute("id")
        window.location.href = `/receita?id=${receitaID}`
    })
}
