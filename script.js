// Seleziona gli elementi
const lampadina = document.getElementById("lampadina");
const accendiSpegniBtn = document.getElementById("accendiSpegniBtn");

// Funzione per cambiare l'immagine della lampadina
accendiSpegniBtn.addEventListener("click", function() {
    if (lampadina.src.includes("white_lamp")) {
        // Se la lampadina è spenta, accendila
        lampadina.src = "./img/yellow_lamp.png";
        accendiSpegniBtn.innerText = "Spegni";
    } else {
        // Se la lampadina è accesa, spegnila
        lampadina.src = "./img/white_lamp.png";
        accendiSpegniBtn.innerText = "Accendi";
    }
    console.log(lampadina.src);
    lampadina.classList.toggle("imgyellow");
    
});



