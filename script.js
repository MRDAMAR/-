window.addEventListener("load", () => {
    setTimeout(addGalleryImages, 5000);
});

function addGalleryImages() {
    // Масив з URL-адресами
    const imagesUrl = [
        "https://shadowfight2.com/images/slides/screenshot_01.jpg",
        "https://shadowfight2.com/images/slides/screenshot_02.jpg",
        "https://shadowfight2.com/images/slides/screenshot_03.jpg",
        "https://shadowfight2.com/images/slides/screenshot_04.jpg",
        "https://shadowfight2.com/images/slides/screenshot_05.jpg",
        "https://shadowfight2.com/images/slides/screenshot_06.jpg"
    ];

    const gallery = document.querySelector(".gallery-images");
    if (!gallery) {
        return;
    }

    const fragment = document.createDocumentFragment();

    imagesUrl.forEach((url, index) => {
        setTimeout(() => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = `Скріншот ${index + 1}`;
            img.classList.add("fade-in");

            fragment.appendChild(img);
            gallery.appendChild(fragment);

            console.log(`✅ Додано: ${url}`);
        }, index * 1000);
    });
}
