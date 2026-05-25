const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuButton.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
  });
});
