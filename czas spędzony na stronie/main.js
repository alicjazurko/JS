
function licznik(start = 0) {
    let number = start;
    document.body.textContent = 'Czas przebywania na stronie:' + 0;
    function licznik1() {
        
        number++;
        document.body.textContent = 'Czas przebywania na stronie:' + number;
       
    }
    return licznik1;
}

let a = licznik();

setInterval(a, 1000);
