var texts = new Array();
texts.push("LAS MEJORES DONAS");
texts.push("DELICIOSAS");
texts.push("A TODOS LES ENCANTA!");

var point = 0;

function changeText(){
  $('h5').html(texts[point]);
  if(point < texts.length - 1){
    point ++;
  }else{
    point = 0;
  }
  setTimeout(changeText, 1000)
}

changeText();

let btn = document.getElementById("opcionesBtn");
let lista = document.getElementById("opciones");

  

btn.addEventListener('click', function(){
  
  lista.style.display='block';
  
})


