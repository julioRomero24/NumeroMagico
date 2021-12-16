function mostrarJuego(){
   
   
    
    document.getElementById("capturarNombre").style.display="none";
    document.getElementById("containerGame").style.display="block";
    ponerNombre(); 
   

  
}

function ponerNombre(){
    var nombre=document.getElementById('inputNombre').value;

    $("#ponerNombre").append("Bienvenido "+nombre+" adivina el número entre el 1 y el 1000 y colocalo en la ventana que se despliega");

}