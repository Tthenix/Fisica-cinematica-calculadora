const boton= document.getElementById("btn")
const obtenerVelocidad = document.getElementById("velocidad");
const obtenerAceleracion = document.getElementById("aceleracion")
const obetenerDistancia = document.getElementById("distancia")

boton.addEventListener("click", (e)=>{
    e.preventDefault()
    calcular()
})


function calcular(){ 
    clearResponse()
    
    const velocidad = +(document.getElementById("velocidad")).value
    const aceleracion = +(document.getElementById("aceleracion")).value
    const distancia = +(document.getElementById("distancia")).value

    const calc= 0 - Number(velocidad)
    const tie= calc / aceleracion
    const dist=0+velocidad+0.5*aceleracion*(tie*tie)

    if(dist > distancia) {
        console.log("El objeto A ha colisionado con el Objeto B")
        c = velocidad + (1/2)*(0-velocidad)
        c2 = distancia/c
        acel = (0-velocidad)/c2
        const Respuesta = "El objeto A ha colisionado con el Objeto B, El objeto B necesitaba frenar a "+ acel + "m/s2 para no colisionar, colisionaron en" + tie + "segunods"
        console.log(Respuesta)
            response(Respuesta)
    }
    else{
        dist2= distancia - dist
        const Respuesta= "Los objetos quedaron a "+ dist2 +" metros de colisionar.Desaceleraron en "+ tie + " segundos"
            response(Respuesta)
    }
}


const response = (res) => {
    clearResponse();
    const container_res = document.querySelector(".container-res")
    const responseDiv = document.createElement("div");
    responseDiv.innerHTML = `<h4></h4>
    <p>${res}</p>`;
    container_res.appendChild(responseDiv);
}

const clearResponse = () =>{
    const responses = document.querySelector("#idResponse");
    while (responses.firstChild) {
        responses.removeChild(responses.firstChild);
    }
}
