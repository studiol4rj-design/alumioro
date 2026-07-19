const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelectorAll("[data-nav] a");
const showroomModal = document.querySelector("[data-showroom-modal]");
const showroomClose = document.querySelector("[data-showroom-close]");
const showroomSessionKey = "alumioro-showroom-seen";

if (showroomModal && sessionStorage.getItem(showroomSessionKey) === "true") {
  showroomModal.classList.add("is-hidden");
}

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

showroomClose?.addEventListener("click", () => {
  showroomModal?.classList.add("is-hidden");
  sessionStorage.setItem(showroomSessionKey, "true");
});

showroomModal?.addEventListener("click", (event) => {
  if (event.target === showroomModal) {
    showroomModal.classList.add("is-hidden");
    sessionStorage.setItem(showroomSessionKey, "true");
  }
});
