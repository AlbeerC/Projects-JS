const number = document.querySelector(".number");
const btnDecrease = document.getElementById("btnDecrease");
const btnIncrease = document.getElementById("btnIncrease");
const btnReset = document.getElementById("btnReset");
let count = 0;

btnDecrease.addEventListener("click", () => {
    count--
    number.textContent = count;
    if (count < 0) {
        number.className = "red"
    }
})

btnIncrease.addEventListener("click", () => {
    count++
    number.textContent = count; 
    if (count > 0) {
        number.className = "green"
    }
})

btnReset.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
    if (count === 0) {
        number.className = "black"
    }
})