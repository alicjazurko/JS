
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
  // console.log(e.clientX, e.clientY);
  // h1.textContent = `${e.screenX}, ${e.screenY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;
  // h1.textContent = e.clientX + ", " + e.clientY;
  h1.textContent = "";
  document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2}, ${e.clientX / e.clientY * 20})`;

})

document.body.addEventListener('mousemove', function(e) {
  let dot = document.createElement('div');
  dot.classList.add('dot');
  document.body.appendChild(dot);
  dot.style.left = e.pageX +"px";
  dot.style.top = e.pageY+"px";
  // console.log(e.clientY);
  dot.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2}, ${e.clientX / e.clientY * 20})`;
})