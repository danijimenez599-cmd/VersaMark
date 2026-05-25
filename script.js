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

// Modal Logic
const modalTriggers = document.querySelectorAll("[data-modal-target]");
const closeButtons = document.querySelectorAll(".modal-close");
const modals = document.querySelectorAll(".modal");

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const targetId = trigger.getAttribute("data-modal-target");
    const targetModal = document.getElementById(targetId);
    if (targetModal) {
      targetModal.showModal();
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    if (modal) {
      modal.close();
      document.body.style.overflow = ''; 
    }
  });
});

modals.forEach(modal => {
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
      document.body.style.overflow = '';
    }
  });
});
