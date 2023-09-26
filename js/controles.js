function reproducir() {
    let icono = document.getElementById("icono-play");
    let control = document.getElementById("audio");

    if (control.paused) {
        icono.setAttribute("name", "pause-outline");
        control.play();
    } else {
        icono.setAttribute("name", "play-outline");
        control.pause();
    }
}






