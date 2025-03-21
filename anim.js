// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "ERES PARA MI", time: 19 },
  { text: "ME LO HA DICHO EL VIENTO", time: 23 },
  { text: "ERES PARA MI", time: 25 },
  { text: "LO OIGO TODO EL TIEMPO", time: 28 },
  { text: "ERES PARA MI", time: 29 },
  { text: "ME LO HA DICHO EL VIENTO", time: 32 },
  { text: "ERES PARA MI", time: 35 },
  { text: "LA SOMBRA QUE PASA LA LUZ QUE ME ABRAZA", time: 40 },
  { text: "TUS OJOS MIRANDOME", time: 42 },
  { text: "LA CALLE QUE CANTA SU CANTO DE DIARIO EL MUNDO MOVIENDOSE", time: 45 },
  { text: "Y YO SE QUE TIENES MIEDO", time: 50 },
  { text: "Y NO ES UN BUEN MOMENTO PARA TI", time: 53 },
  { text: "Y PARA ESTO QUE NOS VIENE SUCEDIENDO", time: 56 },
  { text: "PERO ERES PARA MI", time: 61 },
  { text: "ME LO HA DICHO EL VIENTO", time: 65 },
  { text: "ERES PARA MI", time: 67 },
  { text: "LO OIGO TODO EL TIEMPO", time: 69 },
  { text: "ERES PARA MI", time: 72 },
  { text: "ME LO HA DICHO EL VIENTO", time: 75 },
  { text: "ERES PARA MI", time: 77 },
  { text: "EL ESPEJO QUE DA SU REFLEJO EN TODO", time: 82 },
  { text: "LO PINTA TAL COMO ES", time: 85 },
  { text: "MI CUERPO QUE NO TIENE PESO SI ESCUCHO TU VOZ LLAMANDOME", time: 86 },
  { text: "Y YO SE QUE TIENES MIEDO", time: 93 },
  { text: "Y NO ES UN BUEN MOMENTO PARA TI", time: 94 },
  { text: "Y PARA ESTO QUE NOS VIENE SUCEDIENDO", time: 98 },
  { text: "TEMES SENTIR MAS DE LA CUENTA", time: 104 },
  { text: "EL CORAZON ES UN MUSCULO SI NO LATE, REVIENTA", time: 107 },
  { text: "EXTRAÑO MIRARTE DE LEJOS", time: 109 },
  { text: "DE HACERNOS LOS TONTOS PARECEMOS TAN VIEJOS", time: 111 },
  { text: "TIEMPO, QUIERES MAS TIEMPO", time: 114 },
  { text: "MIRAME LA PIEL", time: 116 },
  { text: "NO VES ACASO LO QUE SIENTO", time: 118 },
  { text: "TU ERES PARA MI YO SOY PARA TI", time: 119 },
  { text: "EL VIENTO ME LO DIJO CON UN SOPLECILLO", time: 121 },
  { text: "Y YO SE QUE TIENES MIEDO", time: 124 },
  { text: "Y NO ES UN BUEN MOMENTO PARA TI", time: 127 },
  { text: "Y PARA ESTO QUE NOS VIENE SUCEDIENDO", time: 130 },
  { text: "PERO ERES PARA MI", time: 135 },
  { text: "ME LO HA DICHO EL VIENTO", time: 139 },
  { text: "ERES PARA MI", time: 141 },
  { text: "LO OIGO TODO EL TIEMPO", time: 144 },
  { text: "ERES PARA MI", time: 146 },
  { text: "ME LO HA DICHO EL VIENTO", time: 149 },
  { text: "ERES PARA MI", time: 151 },
  { text: "PERO ERES PARA MI", time: 156 },
  { text: "ERES PARA MI", time: 161 },
  { text: "LO OIGO TODO EL TIEMPO", time: 164 },
  { text: "ERES PARA MI", time: 166 },
  { text: "ME LO HA DICHO EL VIENTO", time: 169 },
  { text: "ERES PARA MI", time: 171 },
  { text: "LO OIGO TODO EL TIEMPO", time: 176 },
  { text: "ERES PARA MI", time: 181 },

];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);