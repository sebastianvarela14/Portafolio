/* =========================================================
    GALERÍA / LIGHTBOX
========================================================= */

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");


galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        const image = item.querySelector("img");
        if (!image) {
            return;
        }
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

/* Cerrar */

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

/* Cerrar haciendo clic fuera de la imagen */

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

/* Cerrar con ESC */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});