const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#e1e1e1", "rgb(45, 185, 185)", "rgb(152, 45, 185)", "#4b2db9"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor= colors[randomNumber]
    color.textContent = colors[randomNumber]
})

const getRandomNumber = () => {
    return Math.floor(Math.random()*colors.length);
}