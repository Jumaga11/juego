var vidEne=100;
var vidJug=100;
function calculardano(ata,def,est){   
    var mensaje=document.querySelector('.atadef');
    var menDiv=document.querySelector('.mensaje');
    var agua=document.querySelector('.agua');
    var fuego=document.querySelector('.fuego');
    var rayo=document.querySelector('.rayo');
    const combinaciones = {
      "0-0": 10, // agua vs agua
      "0-1": 20, // agua vs fuego
      "0-2": 0, // agua vs rayo
      "1-0": 0, // fuego vs agua
      "1-1": 10, // fuego vs fuego
      "1-2": 20, // fuego vs rayo
      "2-0": 20, // rayo vs agua
      "2-1": 0, // rayo vs fuego
      "2-2": 10 // rayo vs rayo
    };
    cal=ata.toString()+"-"+def.toString();    
    var dan=combinaciones[cal]
    if(est==0){
        if(def==0){
            def="Agua";
        }else if(def==1){
            def="Fuego";
        }else if(def==2){
            def="rayo";
        }
        if(ata==0){
            ata="Agua";
        }else if(ata==1){
            ata="Fuego";
        }else if(ata==2){
            ata="rayo";
        }
        vidEne-=dan;
        if (vidEne<1){
            vidEne=0;
        }
        mensaje.textContent="¡Defiendeté!";    
        alert("¡Haz atacado con! "+ata+" la vida de enemigo es de: "+vidEne+" el se denfendio con "+def+" El daño que ocasiono fue de: "+dan);   
       // menDiv.textContent="¡Haz atacado con! "+ata+" la vida de enemigo es de: "+vidEne+" el se denfendio con "+def+" El daño que ocasiono fue de: "+dan;   
        agua.setAttribute("onclick", "calculardano(Math.floor(Math.random() * 3),0,1)");  
        fuego.setAttribute("onclick", "calculardano(Math.floor(Math.random() * 3),1,1)");   
        rayo.setAttribute("onclick", "calculardano(Math.floor(Math.random() * 3),2,1)");      
    }else if(est==1){
        if(ata==0){
            ata="Agua";
        }else if(ata==1){
            ata="Fuego";
        }else if(ata==2){
            ata="rayo";
        }
        if(def==0){
            def="Agua";
        }else if(def==1){
            def="Fuego";
        }else if(def==2){
            def="rayo";
        }
        vidJug-=dan;
        if (vidJug<1){
            vidJug=0;
        }
        mensaje.textContent="ATACAR";    
        alert("USTED SE DEFENDIO CON "+def+" la vida suya es: "+vidJug+" el lo ataco con "+ata+" El daño que ocasiono fue de: "+dan);   
        //menDiv.textContent="USTED SE DEFENDIO CON "+def+" la vida suya es: "+vidJug+" el lo ataco con "+ata+" El daño que ocasiono fue de: "+dan;   
        agua.setAttribute("onclick", "calculardano(0,Math.floor(Math.random() * 3),0)");  
        fuego.setAttribute("onclick", "calculardano(1,Math.floor(Math.random() * 3),0)");   
        rayo.setAttribute("onclick", "calculardano(2,Math.floor(Math.random() * 3),0)");             
    }
    if(vidJug<1){ //vida jugador cuando llega a 0 se borran las acciones para que no se pueda atacar y defenderse
        mensaje.textContent="USTED PERDIO"; 
        agua.setAttribute("onclick", "");  
        fuego.setAttribute("onclick", "");   
        rayo.setAttribute("onclick", "");
        setTimeout(function() {
            window.location.href = "index.html";
          }, 10000);   
    }
    if(vidEne<1){ //vida enemigo cuando llega a 0 se borran las acciones para que no se pueda atacar y defenderse
        mensaje.textContent="USTED GANO"; 
        agua.setAttribute("onclick", "");  
        fuego.setAttribute("onclick", "");   
        rayo.setAttribute("onclick", "");  
        setTimeout(function() {
            window.location.href = "index.html";
          }, 10000);  
    }    
  }
  //seleccion de personajes
  function seleccion(ata){   
    if(ata==0){
        window.location.href = "juego1.html";
    }else if(ata==1){
        window.location.href = "juego2.html";
    }
  }