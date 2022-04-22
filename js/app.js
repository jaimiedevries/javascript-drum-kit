window.addEventListener('keydown', speelAudio);

function verwijderTransitie (e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};

function speelAudio (e){
    // Array met daarin alle toetsen
    const alleToetsen = document.querySelectorAll('.toets');

    // Wanneer er een audio element bestaat met als data-key de toets die je invoert sla die dan op.
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);

    // Wanneer er een class toets bestaat met als data-key de toets die je invoert sla die dan op.
    const toets = document.querySelector(`.toets[data-key="${e.key}"]`);

    // Wanneer er geen matchende audio is gevonden stop dan de functie.
    if(!audio) return;

    // Zorgt ervoor dat de audio direct opnieuw afspeelt vanwege runtime.
    audio.currentTime = 0;

    audio.play();

    toets.classList.add('playing');

    /* // Loop over alle toetsen en kijk naar een transitioned event. Wanneer er een toets is waarvan de 
    transitie is geeindigd trigger dan de verwijderTransitie knop om de class playing te verwijderen*/
    alleToetsen.forEach(toets => toets.addEventListener('transitionend', verwijderTransitie));

}  