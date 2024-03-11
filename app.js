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
    var texto = document.querySelector("#input-texto").value;
    var textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input_salida").value = textoEncriptado;
    document.querySelector("#input-texto").value;

}

function copiar() {
    var contenido = document.querySelector('#input-encripted');
    contenido.select();
    document.execCommand("copy"); 
    console.log("Copiado al portapapeles!");
}
