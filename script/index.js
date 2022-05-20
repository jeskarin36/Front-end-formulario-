

let boton =  document.getElementById('btn-submit');
let modal= document.querySelector('.modal');
let btnver= document.querySelector(".btn-ver");


boton.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.setAttribute("id","ventana");
})


btnver.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="tabla.html";
})


