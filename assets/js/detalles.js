import {arregloCiudades1, arregloCiudades2, iconos} from "./objetos.js";
function retrasar(ms){
    return new Promise(resolver => setTimeout(resolver, ms));       
}

const [stgo, newYorkcity, lA, london, tokyo] = await Promise.all(
    arregloCiudades1.map(ciudad => ciudad.fetchCall())
);

await retrasar(1000);

const [par, sngpr, hk, shanghai, seoul] = await Promise.all(
    arregloCiudades2.map(ciudad => ciudad.fetchCall())
);

const mainDisplay = document.querySelector("#contenedor-principal");

function crearContenedor(ciudad) {
    var ciudadActual = separarNombre(ciudad);
    var nombreCiudad = document.createElement("h4");
    nombreCiudad.textContent = `${ciudadActual}`;
    var contenedor = document.createElement("div");
    var conjuntoCartas = document.createElement("div");
    conjuntoCartas.classList.add("card-group", "px-0", "mx-auto");
    contenedor.id = `${ciudadActual}`;
    contenedor.classList.add("gap-3", "d-flex", "flex-column");
    contenedor.appendChild(nombreCiudad);
    contenedor.appendChild(conjuntoCartas);
    mainDisplay.appendChild(contenedor);
}
function crearCarta(ciudad, indice) {
    var nombreCiudad = separarNombre(ciudad)
    //var contenedorGrupo = document.querySelector(`#${nombreCiudad}`)
    var carta = document.createElement("div");
    var icono = document.createElement("img");
    var tituloDia = document.createElement("h5"); //titulo de cada tarjeta con la fecha
    var cuerpoCarta = document.createElement("div"); //div que se encarga del cuerpo de la tarjeta
    var tablaCarta = document.createElement("table"); //crear tabla que contiene los datos
    carta.classList.add("card", "overflow-scroll"); //asegurar que la tarjeta permita hacer scroll
    var filaTabla1 = document.createElement("tr");
    var filaTabla2 = document.createElement("tr");
    var filaTabla3 = document.createElement("tr");
    var filaTabla4 = document.createElement("tr");
    var temp = document.createElement("td");
    var lluvia = document.createElement("td");
    var tempValor = document.createElement("td");
    var lluviaValor = document.createElement("td");
    var humedad = document.createElement("td");
    var viento = document.createElement("td");
    var humedadValor = document.createElement("td");
    var vientoValor = document.createElement("td");
    tituloDia.textContent = `${conseguirDia(ciudad[`${dia}`])}`; //fecha a mostrar en la tarjeta
    icono.setAttribute('src', dia.weather_code=null); //establecer que va a mostrar la imagen
    icono.setAttribute('width', '100px'); //estandarizar el tamaño del icono
    icono.setAttribute('height', '100px'); //estandarizar el tamaño del icono
    icono.classList.add("mx-auto"); //centrar la imagen
    cuerpoCarta.classList.add('card-body', 'px-0');
    tablaCarta.classList.add('table', 'table-bordered', 'table-sm', 'table-striped');
    filaTabla1.classList.add("text-center");
    filaTabla2.classList.add("text-center");
    filaTabla3.classList.add("text-center");
    filaTabla4.classList.add("text-center");
    temp.textContent = 'Temperatura';
    lluvia.textContent= 'Lluvia (%)';
    tempValor.textContent = `${ciudad.daily.temperature_2m_mean[actual]}`
    lluviaValor.textContent = `${ciudad.daily.precepitation_probability_mean[actual]}`
    humedad.textContent = 'Humedad';
    viento.textContent = 'Viento';
    humedadValor.textContent = `${ciudad.daily.relative_humidity_2m_mean[actual]}`;
    vientoValor.textContent = `${ciudad.daily.wind_speed_10m_mean[actual]}`;
    filaTabla1.append(temp, lluvia);
    filaTabla2.append(tempValor, lluviaValor);
    filaTabla3.append(humedad, viento);
    filaTabla4.append(humedadValor, vientoValor);
    tablaCarta.append(filaTabla1, filaTabla2, filaTabla3, filaTabla4);
    cuerpoCarta.appendChild(tablaCarta);
    carta.append(tituloDia, icono, cuerpoCarta);
    //contenedorGrupo.appendChild(carta);
}

function separarNombre(ciudad) {
    let nombreASeparar = ciudad.timezone.split('/');
    nombreASeparar = nombreASeparar[1].split('_');
    return nombreASeparar.join(' ')
}

function conseguirSemana(ciudad) {
    const objetoSemana = {
        dia1 : {},
        dia2 : {},
        dia3 : {},
        dia4 : {},
        dia5 : {},
        dia6 : {},
        dia7 : {}
    }
    for (let i = 0; i < 7; i++) {
        objetoSemana[`dia${i+1}`]['dia'] = ciudad.time[i];
        objetoSemana[`dia${i+1}`]['codigoIcono'] = ciudad.weather_code[i];
        objetoSemana[`dia${i+1}`]['temperaturaMinima'] = ciudad.temperature_2m_min[i];
        objetoSemana[`dia${i+1}`]['temperaturaMaxima'] = ciudad.temperature_2m_max[i];
        objetoSemana[`dia${i+1}`]['temperaturaPromedio'] = ciudad.temperature_2m_mean[i];
        objetoSemana[`dia${i+1}`]['humedadPromedio'] = ciudad.relative_humidity_2m_mean[i];
        objetoSemana[`dia${i+1}`]['precipitacion'] = ciudad.precipitation_probability_mean[i];
    }
    return objetoSemana;
    
}
function conseguirDia(fecha) {
    var date = new Date(fecha);
    return date.toLocaleDateString('es-ES', {weekday: 'short'}).charAt(0).toUpperCase() + date.toLocaleDateString('es-ES', {weekday: 'short'}).slice(1);
}
console.log(stgo);
const stgoSemana = conseguirSemana(stgo.daily);
const nycSemana = conseguirSemana(newYorkcity.daily);
const losAngelesSemana = conseguirSemana(lA.daily);
const londresSemana = conseguirSemana(london.daily);
const tokioSemana = conseguirSemana(tokyo.daily);
const parisSemana = conseguirSemana(par.daily);
const singapurSemana = conseguirSemana(sngpr.daily);
const hongKongSemana = conseguirSemana(hk.daily);
const shangaiSemana = conseguirSemana(shanghai.daily);
const seulSemana = conseguirSemana(seoul.daily);

const contenedor1 = crearContenedor(stgo);
