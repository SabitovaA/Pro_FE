const productsBtn = document.querySelector("#open-modal");

productsBtn.addEventListener("click",function(){
    document.getElementById("my-modal").classList.add("open")
})

const products = document.querySelector("#close");

products.addEventListener("click",function(){
    document.getElementById("my-modal").classList.remove("open")
})









