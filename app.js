//Función para encriptar la información.
function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input_salida").value = textoEncriptado;
    document.querySelector("#input-texto").value;
}

var boton1 = document.querySelector("#btn-encriptar");
    boton1.onclick = encriptar;

    
//Función para desencriptar la información.
function desencriptar() {
    var texto = document.querySelector("#input-encriptado").value;
    var textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".textInput_salida").value = textoEncriptado;
    document.querySelector("#input-encripted").value;

}
/*
function copiarTexto() {
    var text = document.getElementById("#input-encriptado").value;
    navigator.clipboard.writeText("text");
}



function copiarTexto() {
let texto = document.getElementById('#input-encriptado').innerHTML;
let copiarContenido = async () => {
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
    }
}

var boton3 = document.querySelector("#btn-copy");
boton3.onclick = copiarTexto;*/




async function copiarContenido() {
    try {
        await navigator.clipboard.writeText('#input-encripted');
        console.log('Contenido copiado al portapapeles');
        /* Resuelto - texto copiado al portapapeles con éxito */
    } catch (err) {
        console.error('Error al copiar: ', err);
        /* Rechazado - fallo al copiar el texto al portapapeles */
    }
}