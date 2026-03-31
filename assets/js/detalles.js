import {arregloCiudades1, arregloCiudades2, iconos} from "./objetos.js";
function retrasar(ms){
    return new Promise(resolver => setTimeout(resolver, ms));       
}

//Creacion de las variables a utilizar en esta pagina web
const [stgo, newYorkcity, lA, london, tokyo] = await Promise.all(
    arregloCiudades1.map(ciudad => ciudad.fetchCall())
);

await retrasar(1000);

const [par, sngpr, hk, shanghai, seoul] = await Promise.all(
    arregloCiudades2.map(ciudad => ciudad.fetchCall())
);
//variable con el elemento que recibira todos los contenedores hijos para cada ciudad
const mainDisplay = document.querySelector("#contenedor-principal");
//creacion de contenedor cada uno con el nombre de la ciudad (en ingles) y su id correspondiente
function crearContenedor(ciudad) {
    var ciudadActual = ciudad['nombreCiudad'];
    var nombreCiudad = document.createElement("h4");
    nombreCiudad.textContent = `${ciudadActual}`;
    var contenedor = document.createElement("div");
    var conjuntoCartas = document.createElement("div");
    conjuntoCartas.classList.add("card-group", "px-0", "mx-auto");
    conjuntoCartas.id = `grupo${ciudadActual.replace(/\s/g, '')}`;
    contenedor.id = `${ciudadActual.replace(/\s/g, '')}`;
    contenedor.classList.add("gap-3", "d-flex", "flex-column");
    contenedor.appendChild(nombreCiudad);
    contenedor.appendChild(conjuntoCartas);
    mainDisplay.appendChild(contenedor);
}
//funcion que recibe el codigo que la API asigna a cada clima para utilizar el icono correcto
function conseguirIcono(codigo) {
    return iconos[codigo]['dia'];
}
//funcion a cargo de crear la carta para cada dia mostrado en la pagina de detalles
function crearCarta(ciudad, indice) {
    var grupoCartas = document.querySelector(`#grupo${ciudad['nombreCiudad'].replace(/\s/g, '')}`)
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
    tituloDia.textContent = `${conseguirDia(ciudad[`dia${indice+1}`]['dia'])}`; //fecha a mostrar en la tarjeta
    tituloDia.classList.add('text-center')
    icono.setAttribute('src', conseguirIcono(ciudad[`dia${indice+1}`]['codigoIcono'])); //establecer que va a mostrar la imagen
    icono.setAttribute('width', '100px'); //estandarizar el tamaño del icono
    icono.setAttribute('height', '100px'); //estandarizar el tamaño del icono
    icono.classList.add("mx-auto"); //centrar la imagen
    cuerpoCarta.classList.add('card-body', 'px-0');
    tablaCarta.classList.add('table', 'table-bordered', 'table-sm', 'table-striped');
    filaTabla1.classList.add("text-center", 'border');
    filaTabla2.classList.add("text-center");
    filaTabla3.classList.add("text-center");
    filaTabla4.classList.add("text-center");
    temp.textContent = 'Temperatura';
    lluvia.textContent= 'Lluvia (%)';
    tempValor.textContent = `${ciudad[`dia${indice+1}`]['temperaturaPromedio']}°C`;
    lluviaValor.textContent = `${ciudad[`dia${indice+1}`]['precipitacion']}%`;
    humedad.textContent = 'Humedad';
    viento.textContent = 'Viento';
    humedadValor.textContent = `${ciudad[`dia${indice+1}`]['humedadPromedio']}%`;
    vientoValor.textContent = `${ciudad[`dia${indice+1}`]['vientoPromedio']}Km/H`;
    filaTabla1.append(temp, lluvia);
    filaTabla2.append(tempValor, lluviaValor);
    filaTabla3.append(humedad, viento);
    filaTabla4.append(humedadValor, vientoValor);
    tablaCarta.append(filaTabla1, filaTabla2, filaTabla3, filaTabla4);
    cuerpoCarta.appendChild(tablaCarta);
    carta.append(tituloDia, icono, cuerpoCarta);
    grupoCartas.appendChild(carta);
}
//funcion que se utilza para formatear el nombre de manera correcta
function separarNombre(ciudad) {
    let nombreASeparar = ciudad.timezone.split('/');
    nombreASeparar = nombreASeparar[1].split('_');
    return nombreASeparar.join(' ')
}
//funcion que manipula la API para transformarla a un formato utilizable en el codigo
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
        objetoSemana[`dia${i+1}`]['vientoPromedio'] = ciudad.wind_speed_10m_mean[i];
    }
    return objetoSemana;
    
}
//funcion encargada de establecer el dia a mostrar segun la fecha (ejemplo: 14-02-2026 = Sabado)
function conseguirDia(fecha) {
    var date = new Date(fecha + 'T00:00:00');
    return date.toLocaleDateString('es-ES', {weekday: 'short'}).charAt(0).toUpperCase() + date.toLocaleDateString('es-ES', {weekday: 'short'}).slice(1);
}

//creacion de cada semana para utilizar la funcion de crear tarjetas
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

//agregar nombre de la ciudad para cada objeto de la semana, mejora la utilizacion de objetos, concentrandolos en uno solo
stgoSemana['nombreCiudad'] = separarNombre(stgo);
nycSemana['nombreCiudad'] = separarNombre(newYorkcity);
losAngelesSemana['nombreCiudad'] = separarNombre(lA);
londresSemana['nombreCiudad'] = separarNombre(london);
tokioSemana['nombreCiudad'] = separarNombre(tokyo);
parisSemana['nombreCiudad'] = separarNombre(par);
singapurSemana['nombreCiudad'] = separarNombre(sngpr);
hongKongSemana['nombreCiudad'] = separarNombre(hk);
shangaiSemana['nombreCiudad'] = separarNombre(shanghai);
seulSemana['nombreCiudad'] = separarNombre(seoul);

//creacion de los contenedores para cada ciudad
crearContenedor(stgoSemana);
crearContenedor(nycSemana);
crearContenedor(losAngelesSemana);
crearContenedor(londresSemana);
crearContenedor(tokioSemana);
crearContenedor(parisSemana);
crearContenedor(singapurSemana);
crearContenedor(hongKongSemana);
crearContenedor(shangaiSemana);
crearContenedor(seulSemana);


//creacion de las tarjetas para cada dia segun el contenedor al que llama
for (let i = 0; i < 7; i++){
    crearCarta(stgoSemana, i);
    crearCarta(nycSemana, i);
    crearCarta(losAngelesSemana, i);
    crearCarta(londresSemana, i);
    crearCarta(tokioSemana, i);
    crearCarta(parisSemana, i);
    crearCarta(singapurSemana, i);
    crearCarta(hongKongSemana, i);
    crearCarta(shangaiSemana, i);
    crearCarta(seulSemana, i);
}

//Tenia problemas con la asignacion de ID a cada elemento contenedor, al parecer el hecho de que contenga espacios genera conflicto con el codigo, pero no por parte de JavaScript, si no mas bien por parte de CSS, fue necesario agregar una expresion regular (regex) que encuentre cada espacio y lo reemplaze con nada (replace(/\s/g, ''))