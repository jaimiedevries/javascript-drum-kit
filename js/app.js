;// Array met daarin alle 'toetsen'
const alleDrumkitToetsen = document.querySelector('.toetsen');
const alleToetsen = document.querySelectorAll('.toets');

window.addEventListener('keydown', onEvent);
alleDrumkitToetsen.addEventListener('click', onEvent);

/* Loop over alle toetsen en kijk naar een transitioned event. Wanneer er een toets is waarvan de 
   transitie is geeindigd trigger dan de verwijderTransitie knop om de class playing te verwijderen */
alleToetsen.forEach(toets => toets.addEventListener('transitionend', verwijderTransitie));


function onEvent(event) {
    // Hier bekijk ik of er sprake is geweest van een click event, zoniet dan ga ik uit van een keyevent en op basis daarvan 
    if (event.type === 'click' && event.target.matches('.toets')) {
        speelAudio(
            event.target,
            getAudioElement(event.target.dataset.key)
        );

    } else if (event.type === 'keydown') {
        speelAudio(
            getToetsElement(event.key),
            getAudioElement(event.key)
        );
    }
}

function speelAudio(toets, audio) {
    // Wanneer er geen matchende audio is gevonden stop dan de functie.
    if (!audio) return;

    // Zorgt ervoor dat de audio direct opnieuw afspeelt vanwege runtime.
    audio.currentTime = 0;

    audio.play();
    toets.classList.add('playing');
}

function verwijderTransitie(e) {
    if (e.propertyName === 'transform') {
        e.target.classList.remove('playing');
    }
};

function getToetsElement(key) {
    return document.querySelector(`.toets[data-key="${key}"]`);
}

function getAudioElement(key) {
    return document.querySelector(`audio[data-key="${key}"]`);
}