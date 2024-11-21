function obtenerFecha()
{
// creamos un objeto de tipo date
const fecha = new Date()

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

// buscamos el h2 que tiene la fecha y el h3 que tiene la hora y los traemos al documento
const textoArriba = document.querySelector("h2")
const reloj = document.querySelector("h3")

// padstart sirve para rellenar con un 0 al principio en el caso de que haya un solo digito, si hay 2 ya no rellena nada. Se convierte a string los numeros xq padstart solo funca con strings.
const horas = fecha.getHours().toString().padStart(2,"0")
const minutos = fecha.getMinutes().toString().padStart(2,"0")
const segundos = fecha.getSeconds().toString().padStart(2,"0")

// reemplazamos el h2 y h3
textoArriba.innerText = `${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`

if (botonCambiarFormato.innerText === "Cambiar formato a 12 horas")
{
    reloj.innerHTML = `<b>${horas}:${minutos}:${segundos}</b>`
    botonCambiarFormato.addEventListener("click", () => {
        botonCambiarFormato.innerText = "Cambiar formato a 24 horas";
    });
}
else
{
    if (horas === 12) {
        reloj.innerHTML = `<b>${horas}:${minutos}:${segundos} PM</b>`;  // Si son las 12, mostrar 12 PM
    } else if (horas > 12) {
        reloj.innerHTML = `<b>${(horas - 12).toString().padStart(2,"0")}:${minutos}:${segundos} PM</b>`; // Para horas 13 y mayores, restamos 12
    } else {
        reloj.innerHTML = `<b>${horas}:${minutos}:${segundos} AM</b>`;  // Para la mañana, solo mostrar las horas
    }

    botonCambiarFormato.addEventListener("click", () => {
        botonCambiarFormato.innerText = "Cambiar formato a 12 horas";
    });
}
}

// traemos el boton para cambiar de formato
const botonCambiarFormato = document.querySelector("button")
console.log(botonCambiarFormato)

botonCambiarFormato.addEventListener("click", () => {
    botonCambiarFormato.innerText = "Cambiar formato a 24 horas";
});


// la funcion se recarga cada 1 segundo
setInterval(obtenerFecha,1000)

