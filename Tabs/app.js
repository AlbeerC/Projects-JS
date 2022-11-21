const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
        // Remover clase active de otros botones
        btns.forEach( (btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        // Ocultar otros artículos
        articles.forEach( (article) => {
            article.classList.remove("active");
        })

        const element = document.getElementById(id);
        element.classList.add("active");
    };
})