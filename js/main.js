var elBtnOpen = document.querySelector(".js-open-btn")
var elBtnClose = document.querySelector(".js-close-btn")
var elModal = document.querySelector(".modal") 

console.log(elBtnOpen)

elBtnOpen.addEventListener("click", function(){
    elModal.classList.add("modal-open")
})

elBtnClose.addEventListener("click", function(){
    elModal.classList.remove("modal-open")
})