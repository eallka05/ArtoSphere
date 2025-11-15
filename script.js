// Slide data
const slideData = [
    {  date: "1508–1512",title: "The Creation of Adam" },
    {  date: "1563",title: "The Tower of Babel" },
    {  date: "1931" ,title: "The Persistence of Memory"}
];

let slideIndex = 0;
showSlide(slideIndex);

// Change with arrows
function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

// Funksioni kryesor i slideshow
function showSlide(n) {
    let slides = document.getElementsByClassName("slide");

    //Nese kalon kufinjte resetohen
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Hide all slides and remove animation classes
    for (let s of slides) {
        s.style.display = "none";
        
        // Remove .show class so animation can replay
        const t = s.querySelector(".title");
        const d = s.querySelector(".date");
        const r = s.querySelector(".readmore");
        if (t) t.classList.remove("show");
        if (d) d.classList.remove("show");
        if (r) r.classList.remove("show");
    }

    slides[slideIndex].style.display = "block";

    // Marrim elementet
    const date = slides[slideIndex].querySelector(".date");
    const title = slides[slideIndex].querySelector(".title");
    const readmore = slides[slideIndex].querySelector(".readmore");

    // Apply text
    date.textContent = slideData[slideIndex].date;
    title.textContent = slideData[slideIndex].title;

    // Force reflow to restart animation
    void slides[slideIndex].offsetWidth;

    // Timed appearance with .show class
    setTimeout(() => title.classList.add("show"), 800);   // after 0.8s
    setTimeout(() => date.classList.add("show"), 1600);    // after 1.6s
    setTimeout(() => readmore.classList.add("show"), 2400); // after 2.4s

    // --- Update dots ---
    let dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

// Auto-slide every 10 seconds
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 10000);

// --- Dot Click Events ---
let dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});