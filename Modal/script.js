const productsBtn = document.querySelector("#open-modal");
const products = document.querySelector("#close");
const modal = document.querySelector(".modal");
const modal__data = document.querySelector(".modal__data");


async function fetchApi() {
    const url = "https://api.kanye.rest"

    try{
        const response = await fetch(url)
        const data = await response.json()
        modal__data.textContent = data.quote

    }catch(e){
        console.error('Error',e)
    }
}
fetchApi()


productsBtn.addEventListener("click",() => {
    modal.classList.add('open')
})

products.addEventListener("click",function(){
    modal.classList.remove("open")
})









