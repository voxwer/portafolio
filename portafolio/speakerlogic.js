document.addEventListener("DOMContentLoaded", function() {
    var videoback = document.querySelector(".video__Fondo"); // Selecciona el video
    
    // Inicia la reproducción del video automáticamente
    videoback.play();
});

document.addEventListener("DOMContentLoaded", function() {
    var videoback = document.querySelector(".video__Fondo"); // Selecciona el video
    var botonMute = document.getElementById("boton-mute"); // Selecciona el botón
    var iconoMute = document.getElementById("icono-mute"); // Selecciona el icono de mute
    var iconoUnmute = document.getElementById("icono-unmute"); // Selecciona el icono de unmute
  
    // Evento click del botón para mutear/desmutear el video
    botonMute.addEventListener("click", function() {
      if (videoback.muted) {
        // Si el video está muteado, desmutearlo
        videoback.muted = false;
        iconoMute.style.display = "block";
        iconoUnmute.style.display = "none";
      } else {
        // Si el video no está muteado, mutearlo
        videoback.muted = true;
        iconoMute.style.display = "none";
        iconoUnmute.style.display = "block";
      }
    });
  });



  