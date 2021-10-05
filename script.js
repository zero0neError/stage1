window.addEventListener("load",function(){

    document.getElementById('btnValidarFecha').addEventListener("click",function(ev){
        ev.preventDefault();
        fecha=document.getElementById('txtFecha').value.split("/");
        if(validaFecha(fecha)){
            
            document.getElementById('span1').innerHTML="OK";
        }else{

            document.getElementById('span1').innerHTML="ERROR";
        }
    })
});

