let trilho = document.querySelector(".trilho");
let body = document.querySelector("body")

trilho.addEventListener("click", ()=>{
    trilho.classList.toggle("dark")
    body.classList.toggle("dark")
})

const container_hora=document.querySelector("#hora");
const container_minutos=document.querySelector("#minutos");
const container_segundos=document.querySelector("#segundos");

const relogio=()=>{
    const data=new Date();
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora
    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto
    let segundos=data.getSeconds()
    segundos=segundos<10?"0"+segundos:segundos

    const tempo_hora=hora
    const tempo_minutos=minuto
    const tempo_segundos=segundos

    container_hora.innerHTML=tempo_hora
    container_minutos.innerHTML=tempo_minutos
    container_segundos.innerHTML=tempo_segundos
}

const intervalo= setInterval(relogio,1000)

relogio()