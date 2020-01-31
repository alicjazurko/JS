// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
let wyswietl = document.querySelector('div');

const showMessage = (e) => {
 //tutaj rozwiązanie
 // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)
    let text = e.target.value.toLowerCase();
    
    console.log(text);
    passwords.forEach((password, index) => {
        
        for (let i = 0; i < passwords.length; i++) {
            passwords[i].toLowerCase();
        }
        if (password.toLowerCase() === text) {
         // console.log(password, index);
         wyswietl.textContent = messages[index];
        } else {
            wyswietl.textContent = "";
        }
       })
      
      }


input.addEventListener("input", showMessage)



