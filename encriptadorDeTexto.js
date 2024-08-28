function textoValido(text){
    let regex = /^[a-z\s]+$/;
    let alertaElemento=document.getElementById('Alerta');
    if(!regex.test(text)){
        alertaElemento.style.display = 'block';
        return false;
    }else{
        alertaElemento.style.display="none";
        return true;
    }
}
function mostrarOcultarImagen(){
    let resultado = document.getElementById("resultado");
    let imagenOculta = document.getElementById("ImagenOcultarCuadro");

    if(resultado.value.trim()===""){
        imagenOculta.style.display = 'block';
    }else{
        imagenOculta.style.display = 'none';
    }
}

function encriptacion(){
    let texto = document.getElementById("texto").value;
    if(!textoValido(texto)){
        return;
    }

    let textoCodificado = texto.replace(/e/g,"enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("resultado").value = textoCodificado;
    mostrarOcultarImagen();

}
function Desencriptacion(){
    let textoEncriptado = document.getElementById("texto").value;

    if(!textoValido(textoEncriptado)){
        return;
    }

    let textoDescodificado = textoEncriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("resultado").value = textoDescodificado;
    mostrarOcultarImagen()
}
function copiarResultado(){
    let resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
}
document.getElementById("EncriptarTexto").addEventListener("click", function(){
    encriptacion();
});

document.getElementById("DesencriptarTexto").addEventListener("click", function(){
    Desencriptacion();
});
