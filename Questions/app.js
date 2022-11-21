
const buttons = document.querySelectorAll(".question-btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});