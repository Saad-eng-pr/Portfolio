function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const modal = document.getElementById("imageModal");
const closeBtn = document.querySelector(".modal .close");


const liveDemoButtons = document.querySelectorAll(".live-demo-btn");


liveDemoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-target"); 
    const modal = document.querySelector(modalId); 
    modal.style.display = "block"; 

    // Close functionality
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none"; 
    });

    // Close when clicking outside of the modal
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
