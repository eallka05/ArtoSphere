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

    for (let s of slides) s.style.display = "none";

    slides[slideIndex].style.display = "block";

    // Marrim elementet
    const date = slides[slideIndex].querySelector(".date");
    const title = slides[slideIndex].querySelector(".title");
    const readmore = slides[slideIndex].querySelector(".readmore");


    // Apply text
    date.textContent = slideData[slideIndex].date;
    title.textContent = slideData[slideIndex].title;

    // Timed appearance
    setTimeout(() => title.style.opacity = 1, 800);   // sec after slide
    setTimeout(() => date.style.opacity = 1, 1600);    // sec after title
    setTimeout(() => readmore.style.opacity = 1, 2400); // sec after date

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

