// Developer Easter Egg
console.log(
    "%cHello Recruiter! 🚀", 
    "color: #10b981; font-size: 20px; font-weight: bold; font-family: monospace;"
);
console.log(
    "%cLooking for a passionate Computer & Control Engineer with Embedded Systems and VAPT skills? You found him!\nFeel free to explore the code or contact me directly via email.", 
    "color: #94a3b8; font-size: 14px; font-family: monospace;"
);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("imgModalTrigger");
    const modal = document.getElementById("imageLightbox");
    const modalImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".image-lightbox-modal .lightbox-close");

    if (trigger && modal && modalImg) {
        const img = trigger.querySelector("img");

        // Open modal when clicking the image
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });

        // Close when clicking the close button
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        // Close when clicking outside the image area
        modal.addEventListener("click", (e) => {
            if (e.target !== modalImg) {
                modal.style.display = "none";
            }
        });
    }
});
