var elOpenBtn = document.querySelector(".madal-open")
var elModal = document.querySelector(".btn")
var elCloseBtn = document.querySelector(".close-btn")

elOpenBtn.addEventListener("click", function() {
    elModal.classList.add('modal-open')
})