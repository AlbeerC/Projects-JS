window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("bottom", window.scrollY > 0);
});
