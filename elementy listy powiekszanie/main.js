const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let flag = false;
let fs = 10;


//PĘTLA
// btn.addEventListener('click', function() {
//     flag = true;
//     for (let i = 0; i < li.length; i++) {
//         li[i].style.display = "block";
//     }
    
//     if(flag == true) {
//         fs+=1;
//         for (let j = 0; j < li.length; j++) {
//             li[j].style.fontSize = fs+"px";
//         }
        
//     }
    
// })

//FOREACH
btn.addEventListener('click', function() {
    
    li.forEach((liElement)=>{
        liElement.style.display = "block";
        liElement.style.fontSize = fs +"px";
    })
    fs++;
})