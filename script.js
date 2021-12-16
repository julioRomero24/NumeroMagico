
var max=1000;
var min=1;
var intentos=0;
var numeroSecreto;
numeroSecreto=Math.random()*(max-min)+min;
numeroSecreto=parseInt(numeroSecreto);

var partidaEnCurso=true;

function inicio(){
    
    if(!partidaEnCurso){
        numeroSecreto=Math.random()*(max-min)+min;
        numeroSecreto=parseInt(numeroSecreto);
        partidaEnCurso=true;
        intentos=0;
        
    }
    
    comenzarJuego();
    /*alert("intentos="+intentos);*/
    intentos++;       
}
  
function comenzarJuego(){
    
    var numeroDelUsuario=document.getElementById('inputNum').value;
        
    numeroDelUsuario=parseInt(numeroDelUsuario);
    /*alert(numeroDelUsuario+"y"+numeroSecreto);*/

    if(intentos<10){
        if(numeroDelUsuario==numeroSecreto){
            alert("¡Felicitaciones, haz adivinado el número!");
            partidaEnCurso=false;
            
                
        }
        else if(numeroDelUsuario==0){
             alert("Ha terminado el juego");
            partidaEnCurso=false;
            
                
        }
        else if(numeroDelUsuario>numeroSecreto){
            alert("el número ingresado es mayor al número mágico");
           
                
        }
        else if(numeroDelUsuario<numeroSecreto){
             alert("El número ingresado es menor al número mágico");
                
        }

    }else{
        alert("ha perdido las 10 vidas");
        partidaEnCurso=false;
    }
       
}

function mueveReloj(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();

    horaImprimible = hora + " : " + minuto + " : " + segundo;

    document.form_reloj.reloj.value = horaImprimible;

    setTimeout("mueveReloj()",1000);
}

