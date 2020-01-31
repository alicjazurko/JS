let array = ["walcz","będzie dobrze"];
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowMessage = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
let h1 = document.querySelector('h1');
advice = document.querySelector('input');

const addAdvice = function(e) {
    e.preventDefault();
    const newElement = advice.value;
    array.push(newElement);
    advice.value = "";
}

const showTip = function() {
    const index = Math.floor(Math.random() * array.length);
    h1.textContent = array[index];
}

const reset = function() {
    array = ["walcz","będzie dobrze"];
} 

const showAlert = function() {
    alert(array);
}

btnAdd.addEventListener('click', addAdvice);
btnShowMessage.addEventListener('click', showTip);
btnClean.addEventListener('click', reset);
btnShowOptions.addEventListener('click', showAlert)

