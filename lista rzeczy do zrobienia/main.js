const btnAdd = document.querySelector('button:nth-of-type(1)');
const btnLook = document.querySelector('button:nth-of-type(2)');
let inputAdd = document.querySelector('input:nth-of-type(1)');
let inputLook = document.querySelector('input:nth-of-type(2)');
let ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');


const remove = (e) => {
    e.target.parentNode.remove();
}

btnAdd.addEventListener('click', function(){
    
    
    let inputContent = inputAdd.value;
    let newLi = document.createElement('li');
    if(inputContent == "") return;
    
    ul.appendChild(newLi);  
    newLi.innerHTML = inputContent + ' <button>Usuń</button>';
    inputAdd.value = "";

    newLi.querySelector('button').addEventListener('click', remove);

})

const searching = (e) => {
 const searchText = e.target.value.toLowerCase();
 let tasks = [...liElements];
 console.log(tasks);
 tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
 console.log(tasks);
 //ul.textContent = "";
 tasks.forEach(li => ul.appendChild(li))
}

inputLook.addEventListener('input', searching)