// =====================================================
// PHOTO GALLERY LIGHTBOX
// =====================================================

// Get gallery images
const galleryImages = document.querySelectorAll(".gallery img");

// Get lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.getElementById("lightbox-close");
const previousButton = document.getElementById("lightbox-prev");
const nextButton = document.getElementById("lightbox-next");

// Current photo
let currentPhoto = 0;


// =====================================================
// OPEN PHOTO
// =====================================================

galleryImages.forEach((image, index) => {

    image.addEventListener("click", function () {

        currentPhoto = index;

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.style.display = "flex";

    });

});


// =====================================================
// SHOW PHOTO
// =====================================================

function showPhoto(index) {

    if (index >= galleryImages.length) {
        index = 0;
    }

    if (index < 0) {
        index = galleryImages.length - 1;
    }

    currentPhoto = index;

    lightboxImage.src =
        galleryImages[currentPhoto].src;

    lightboxImage.alt =
        galleryImages[currentPhoto].alt;
}


// =====================================================
// PREVIOUS PHOTO
// =====================================================

previousButton.addEventListener("click", function (event) {

    event.stopPropagation();

    showPhoto(currentPhoto - 1);

});


// =====================================================
// NEXT PHOTO
// =====================================================

nextButton.addEventListener("click", function (event) {

    event.stopPropagation();

    showPhoto(currentPhoto + 1);

});


// =====================================================
// CLOSE LIGHTBOX
// =====================================================

closeButton.addEventListener("click", function (event) {

    event.stopPropagation();

    lightbox.style.display = "none";

});


// =====================================================
// CLOSE WHEN CLICKING DARK BACKGROUND
// =====================================================

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// =====================================================
// KEYBOARD CONTROLS
// =====================================================

document.addEventListener("keydown", function (event) {

    if (lightbox.style.display !== "flex") {
        return;
    }


    // Left arrow
    if (event.key === "ArrowLeft") {

        showPhoto(currentPhoto - 1);

    }


    // Right arrow
    if (event.key === "ArrowRight") {

        showPhoto(currentPhoto + 1);

    }


    // Escape
    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

});