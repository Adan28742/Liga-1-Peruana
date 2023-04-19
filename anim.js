
document.addEventListener("DOMContentLoaded", function() {
   
    var boton = document.getElementById("verTabla");
  
  
    boton.addEventListener("click", function() {

      var tablaPosiciones = document.getElementById("tabla-posiciones");
      var posicion = tablaPosiciones.offsetTop;

      window.scrollTo({
        top: posicion,
        behavior: "smooth"
      });
    });
  });
  