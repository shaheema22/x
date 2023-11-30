const reset = false;
let sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset
});

sr.reveal('main', {});
sr.reveal('main h1, main p, main a, main dotlottie-player', {
    delay: 200
});

sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1500,
    reset
});

sr.reveal('#about h1, #about  p, #about video, #about  img, #about a, #tokenomics h1, #tokenomics p, #utility h1, #utility p, #utility a, .inputs input, label', {
    delay: 200,
    interval: 200
});

sr = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 1500,
    reset
});
sr.reveal('h3, .cards .card, .card p', {
    delay: 200,
    interval: 200
});

function toggleMenu() {
    const menu = document.querySelector(".mobile_nav");
    if (menu.style.display === 'none')
        menu.style.display = 'flex'
    else
        menu.style.display = 'none'
}