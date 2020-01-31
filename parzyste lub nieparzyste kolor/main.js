// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony
const tlo = document.body;

tlo.addEventListener('click', function(e) {
    let positionX = e.clientX;
    let positionY = e.clientY;
    console.log(positionX + " " + positionY);
    if (positionX%2 == 0 && positionY%2 == 0) {
        tlo.style.backgroundColor = "red";
    } else if (positionX%2 == 1 && positionY%2 == 1) {
        tlo.style.backgroundColor = "blue";
    } else if ((positionX%2 == 1 && positionY%2 == 0) || (positionX%2 == 0 && positionY%2 == 1)) {
        tlo.style.backgroundColor = "green";
    }
})