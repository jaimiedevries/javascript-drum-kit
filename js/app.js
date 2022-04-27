// Array met daarin alle 'toetsen'
const alleDrumkitToetsen = document.querySelector('.toetsen');

const alleToetsen = document.querySelectorAll('.toets');

function verwijderTransitie (e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};

function speelAudio (e){
    // Array met daarin alle toetsen
    const alleToetsen = document.querySelectorAll('.toets');

    let toets;
    let audio;

    // Hier bekijk ik of er sprake is geweest van een click event, zoniet dan ga ik uit van een keyevent en op basis daarvan 
    if(e.type === 'click' && e.target.matches('.toets')){
        // toets bevat nu het element waar op is geklikt.
        toets = e.target;
        // Wanneer er een class bestaat met als data-key degene waar ik op heb geklikt, sla dat dan op. 
        audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    }else {
        // Wanneer er een audio element bestaat met als data-key de toets die je invoert sla die dan op.
         audio = document.querySelector(`audio[data-key="${e.key}"]`);
        // Wanneer er een class toets bestaat met als data-key de toets die je invoert sla die dan op.
         toets = document.querySelector(`.toets[data-key="${e.key}"]`);
    }
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

window.addEventListener('keydown', speelAudio);
alleDrumkitToetsen.addEventListener('click', speelAudio);