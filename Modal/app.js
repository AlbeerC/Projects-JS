const btnOpen = document.getElementById("openModal");
const btnClose = document.getElementById("closeModal");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", () => {
    modal.classList.add("viewModal");
})

btnClose.addEventListener("click", () => {
    modal.classList.remove("viewModal"); 
})