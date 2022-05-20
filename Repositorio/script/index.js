

let boton =  document.getElementById('btn-submit');
let modal= document.querySelector('.modal');
let btnver= document.querySelector(".btn-ver");
let btnback= document.querySelector(".btn-back");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.setAttribute("id","ventana");
})


btnver.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="tabla.html";
})


btnback.addEventListener("click",(e)=>{
    e.preventDefault();
   alert("hola");
})