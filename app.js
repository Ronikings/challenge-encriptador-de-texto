
function encriptar(){


    let mensajeEncriptar = document.getElementById("textbox").value;

    if(mensajeEncriptar === "") {
      sinTextoDeEntrada();
      swal("Oops!", "¡Ingrese un mensaje, el campo de texto está vacio!", "error");
     }else {    
      desplegarOcultar();

    let encriptarE = mensajeEncriptar.replaceAll(/[eé]/gi, 'enter'); /* se incluye el parámetro g(global) y elparámetro i(ignore case - ignorar mayúsculas y minúsculas)
    instrucción que busca y sustituye la letra e con y sin acento.*/
    //console.log(encriptarE);

    let encriptarI = encriptarE.replaceAll(/[ií]/gi, 'imes');
    //console.log(encriptarI);

    let encriptarA = encriptarI.replaceAll(/[aá]/gi, 'ai');
    //console.log(encriptarA);
    
    let encriptarO = encriptarA.replaceAll(/[oó]/gi, 'ober');
    //console.log(encriptarO);

    let encriptarU = encriptarO.replaceAll(/[uú]/gi, 'ufat');
    //console.log(encriptarU);

    let mensajeEncriptado = encriptarU.toLowerCase(); // pasamos todo a minúsculas y lo almacenamos en la variable final
    console.log(mensajeEncriptado);

    let mensajeprueba = mensajeEncriptado;

    mensajeSalida.value = mensajeEncriptado;

    document.getElementById("textbox").value =""; // borramos el campo de texto
    
     }


    return 
}


function desencriptar(){
       
    
    let mensajeDesencriptar = document.getElementById("textbox").value;
     //let mensajeDesencriptar = encriptar();
     if(mensajeDesencriptar === "") {
      sinTextoDeEntrada();
      swal("Oops!", "¡Ingrese un mensaje, el campo de texto está vacio!", "error");
     }else {    
      desplegarOcultar();

     let desencriptarU = mensajeDesencriptar.replaceAll(/ufat/gi, 'u');
    //console.log(desencriptarU);

    let desencriptarO = desencriptarU.replaceAll(/ober/gi, 'o');
    //console.log(desencriptarO);

    let desencriptarA = desencriptarO.replaceAll(/ai/gi, 'a');
    //console.log(desencriptarA);

    let desencriptarI = desencriptarA.replaceAll(/imes/gi, 'i');
    //console.log(desencriptarI);

    let desencriptarE = desencriptarI.replaceAll(/enter/gi, 'e');
    //console.log(desencriptarE);

    let mensajeDesencriptado = desencriptarE.toLowerCase();
    console.log(mensajeDesencriptado);

    mensajeSalida.value = mensajeDesencriptado;
    document.getElementById("textbox").value ="";
     } 

    return;

}



function desplegarOcultar(){

  document.getElementById('esperando_texto').style.display = "none";
  document.getElementById('mensaje_no_texto').style.display = "none";
  document.getElementById('mensaje_ingresar_texto').style.display = "none";


  document.getElementById('mensajeSalida').style.display = "block";
  document.getElementById('copiar').style.display = "block";
    
}

function sinTextoDeEntrada(){

  document.getElementById('esperando_texto').style.display = "block";
  document.getElementById('mensaje_no_texto').style.display = "block";
  document.getElementById('mensaje_ingresar_texto').style.display = "block";

  document.getElementById('mensajeSalida').style.display = "none";
  document.getElementById('copiar').style.display = "none";

}

/* Función que bloquea teclas de Mayúsculas y caracteres especiales */
textbox.addEventListener("keypress", (event) => {                      
    if (!/[\sa-z0-9ñ.,]/.test(String.fromCharCode(event.charCode)) &&
    !event.ctrlKey && !event.SpaceKey) {
        event.preventDefault();
    }
});

function copiar() {

    let copyText = document.getElementById("mensajeSalida");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }
