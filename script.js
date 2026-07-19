const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelectorAll("[data-nav] a");

toggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

