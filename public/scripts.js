
const articles = document.querySelectorAll('article')
const modalOverlay = document.querySelector('.modal-overlay')
const close = document.querySelector('.modal-close')


for(let article of articles){
    article.addEventListener("click", function(){
        const img = article.getAttribute("id")
        const title = article.querySelector("p").innerHTML
        const legend = article.querySelector("legend").innerHTML

        modalOverlay.classList.add('active')

        modalOverlay.querySelector("img").src = `./assets/${img}`
        modalOverlay.querySelector("h2").innerHTML = title
        modalOverlay.querySelector("p").innerHTML = legend
       
    })
}

close.addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})