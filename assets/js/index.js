import {arregloCiudades1, arregloCiudades2, iconos} from './objetos.js';
const tarjetas1 = document.querySelectorAll(".tarjeta-1");
const tarjetas2 = document.querySelectorAll(".tarjeta-2");

function retrasar(ms){
    return new Promise(resolver => setTimeout(resolver, ms));       
}
function separarNombre(nombre) {
    let nombreASeparar = nombre.timezone.split('/');
    nombreASeparar = nombreASeparar[1].split('_');
    return nombreASeparar.join(' ')
    

}
function cicloDia() {
    const horas = new Date().getHours();
    if (horas >= 6 && horas <= 18){
        return "dia"
    }
    return "noche"
}
async function main() {
    await Promise.all(arregloCiudades1.map(ciudad => ciudad.fetchCall()));
    await retrasar(1000);
    await Promise.all(arregloCiudades2.map(ciudad => ciudad.fetchCall()));
    arregloCiudades1.forEach((ciudad) => console.log(separarNombre(ciudad.resultado)));
    arregloCiudades2.forEach((ciudad) => console.log(separarNombre(ciudad.resultado)));
    console.log(arregloCiudades1[0].resultado)
    tarjetas1.forEach((elemento, index) => {
        elemento.style.width = "250px"
        const imagen = document.createElement("img");
        const nombre = document.createElement("div");
        const resumen = document.createElement("div");
        const breakPoint = document.createElement("hr");
        nombre.textContent = separarNombre(arregloCiudades1[index].resultado);
        resumen.textContent = `Temperatura Actual: ${arregloCiudades1[index].resultado.current.temperature_2m}°C`;
        imagen.setAttribute("src", iconos[arregloCiudades1[index].resultado.current.weather_code][cicloDia()]);
        resumen.classList.add('pb-2');
        elemento.appendChild(imagen);
        elemento.appendChild(breakPoint)
        elemento.appendChild(nombre)
        elemento.appendChild(breakPoint);
        elemento.appendChild(resumen);
    })
    tarjetas2.forEach((elemento, index) => {
        elemento.style.width = "300px"
        const imagen = document.createElement("img");
        const nombre = document.createElement("div");
        const resumen = document.createElement("div");
        const breakPoint = document.createElement("hr");
        nombre.textContent = separarNombre(arregloCiudades2[index].resultado);
        resumen.textContent = `Temperatura Actual: ${arregloCiudades2[index].resultado.current.temperature_2m}°C`;
        imagen.setAttribute("src", iconos[arregloCiudades2[index].resultado.current.weather_code][cicloDia()]);
        resumen.classList.add('pb-2');
        elemento.appendChild(imagen);
        elemento.appendChild(breakPoint);
        elemento.appendChild(nombre)
        elemento.appendChild(breakPoint);
        elemento.appendChild(resumen);
    })
}

main()