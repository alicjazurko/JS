// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

//obiekt --->> wyniki gry
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

//obiekt --->> gra - wybór gracza i komputera
const game = {
    playerHand: "", // wybór gracza
    aiHand: "" // wybór komputera
}

const hands = [...document.querySelectorAll('.select img')]; // tablica wyborów -  zdjęcia

//funkcja wybór gracza
function handSelection() {   
    game.playerHand = this.dataset.option; //ustawiamy na wybór gracza, to zdjęcie, które kliknie/ dataset - ze struktury html data-option
    hands.forEach(hand => hand.style.boxShadow = ""); //ustawiamy ramke na obiekt kliknięty, musi być pętla bo nie da się ustawić styli na tablice
    this.style.boxShadow = "0 0 0 4px yellow"; // ramka
}

//funkcja wybór komputera
function aiChoice() {

    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option; // losowa liczba 0-2 oznacza wybór gracza i przyporządkowanie im nazwy wyboru 
    return aiHand; 
}

//funkcja sprawdzająca kto wygrał
function chceckResult(player, ai) {
    if(player === ai) {
        return "draw";
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win";
    } else {
        return "loss";
    }
}
//publikacja wyniku 
//game.playerHand = player, game.aiHand = ai, gameResult = result
function publishResult(player, ai, result) { 
    //wybór gracza, komputera i kto wygrał
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('[data-summary="who-win"]').textContent = result;
    
    gameSummary.numbers++; //liczba gier
    document.querySelector('p.numbers span').textContent = +gameSummary.numbers; //publikacja liczby gier

    //publikacja wyniku
    if(result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!!!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if(result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "remis :\\";
        document.querySelector('[data-summary="who-win"]').style.color = "gray";
    }

}
//reset wyboru gracza, odświetlenie ramki
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}
// funkcja sterujaca GŁÓWNA

function startGame() {
    if (game.playerHand === "") {
        return alert("wybierz dłoń"); //alert jeśli nic nie zostało wybrane
    }

    game.aiHand = aiChoice(); //przypisanie funkcji wyboru komputera
    const gameResult = chceckResult(game.playerHand, game.aiHand); //przypisanie funkcji wyniku (kto wygrał)
    publishResult(game.playerHand, game.aiHand, gameResult); //publikacja wyniku
    endGame(); //reset wyboru gracza
}

//co sie stanie jeżeli klikniemy w obrazek --->> wybór gracza
hands.forEach(hand => hand.addEventListener('click', handSelection))

//co sie stanie jeżeli klikniemy w przycisk --->> funkcja sterująca 
document.querySelector('.start').addEventListener('click', startGame);
