// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let indexArray = 0;
let indexElement = -5;
// Implementacja
const addLetter = () => {
 
   spnText.textContent += txt[indexArray][indexElement];
   indexElement++;

   if(indexElement === txt[indexArray].length) {
       indexArray++;

       if(indexArray === txt.length) return;

       return setTimeout(() => {
            indexElement = 0;
            spnText.textContent = ""; 
            addLetter();
       }, 2000)
       
   }
   setTimeout(addLetter,100);
 // Użyj w środku setTimeout
}


//addLetter(); //pierwsze wywołanie
const indexTyping = setInterval(addLetter, 100);

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);