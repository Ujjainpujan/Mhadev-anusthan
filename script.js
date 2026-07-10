// Mahadev Anusthan Kendra
console.log("Website Loaded Successfully");
// Mahadev Anusthan Kendra

window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
    } else {
        header.style.background = "rgba(0,0,0,0.85)";
    }
});
