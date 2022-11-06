
const obtenerVelocidad = document.getElementById("velocidad");
const obtenerAceleracion = document.getElementById("aceleracion")
const obetenerDistancia = document.getElementById("distancia")

obtenerVelocidad.addEventListener("change", getVelocidad)
obtenerAceleracion.addEventListener("change", getAceleracion)
obetenerDistancia.addEventListener("change", getDistancia)




function getVelocidad(){ 
    const velocidadValue = obtenerVelocidad.value;
    if(velocidadValue < 0){
        response("No se puede ingresar la velocidad en negativo, ingrese de nuevo la velocidad (+)")
    }
    else{
        clearResponse()
        console.log(velocidadValue)
    } 
}

function getDistancia(){ 
    const distanciaValue = obetenerDistancia.value;
    if(distanciaValue < 0){
        response("No se puede ingresar la distancia en negativo, ingrese de nuevo la velocidad (+):")
    }
    else{
        clearResponse()
        console.log(distanciaValue)
    }      
}

function getAceleracion(){ 
    const aceleracionValue = obtenerAceleracion.value;
    if(aceleracionValue > 0){
        response("No se puede ingresar la desaceleración en Positivo, vuelve a ingresarla en Negativo (-)")
    }
    else{
        clearResponse()
        console.log(aceleracionValue)
        
    }      
}

function calcular(){ 
    const velocidadValue = document.getElementById("velocidad")
    const aceleracionValue = document.getElementById("aceleracion")
    const distanciaValue = document.getElementById("distancia")
    
    const calc= 0 - velocidadValue
    const tie= calc / aceleracionValue
    const dist=0+velocidadValue+0.5*aceleracionValue*(tie*tie)

    if(dist>distanciaValue) {
        console.log("El objeto A ha colisionado con el Objeto B")
        c = velocidadValue + (1/2)*(0-velocidadValue)
        c2 = distanciaValue/c
        acel = (0-velocidadValue)/c2
        const Respuesta = "El objeto B necesitaba frenar a "+ acel + "m/s2 para no colisionar, colisionaron en" + tie + "segunods"
        console.log(Respuesta)
        response(Respuesta)
    }
}




const response = (res) => {
    clearResponse();
    const container_res = document.querySelector(".container-res")
    const responseDiv = document.createElement("div");
    responseDiv.innerHTML = `<h4>Error</h4>
    <p>${res}</p>`;
    container_res.appendChild(responseDiv);
}

const clearResponse = () =>{
    const responses = document.querySelector("#idResponse");
    while (responses.firstChild) {
        responses.removeChild(responses.firstChild);
    }
}