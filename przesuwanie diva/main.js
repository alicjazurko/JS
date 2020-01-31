// const div = document.querySelector('div');
// let divX = 150;
// let divY = 50;
// div.style.left = divX + "px";
// div.style.top = `${divY}px`;

// let drawActive = false;

// let insertDivX;
// let insertDivY;

// div.addEventListener('mousedown', (e) => {
//  div.style.backgroundColor = "gray";
//  drawActive = !drawActive;
//  // drawActive = true;

//  insertDivX = e.offsetX;
//  insertDivY = e.offsetY;
//  console.log(insertDivX, insertDivY);

// })

// div.addEventListener('mousemove', (e) => {
//  if (drawActive) {


//   divX = e.clientX - insertDivX;
//   divY = e.clientY - insertDivY;
//   div.style.left = `${divX}px`;
//   div.style.top = `${divY}px`;
//  }
// })

// div.addEventListener('mouseup', () => {
//  div.style.backgroundColor = "black";
//  drawActive = !drawActive;
//  // drawActive = false;
// })

let divX = 100;
let divY = 100;

let div = document.querySelector('div');

div.style.top = divY + "px";
div.style.left = divX + "px";

let drawActive = false;
div.addEventListener('mousedown', function(e){
    console.log(e.clientY);
    div.style.backgroundColor = "gray";
    drawActive = true;
    
    transX = e.offsetX;
    transY = e.offsetY;
})

div.addEventListener("mousemove", function(e){
    divX1 = e.clientX;
    divY1 = e.clientY;


    if(drawActive == true) {
        div.style.top = (divY1 - transY) + "px";
        div.style.left = (divX1 - transX) + "px";
    }
    
})

div.addEventListener("mouseup", function(){
    drawActive = false;
    div.style.backgroundColor = "black";
})

