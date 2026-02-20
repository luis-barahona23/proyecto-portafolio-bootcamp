import {ciudades} from "./detalleCiudades.js"
console.log(ciudades.length)
let arregloFinal = [];
function totalTemp(listaDias, nombreKey) {
    let valorTotal = listaDias.reduce((total, dia)=> {
        return total + dia[nombreKey];
    }, 0);
    return valorTotal;
}
function totalDia(clima, climaSolicitado) {
    let total = 0;
    clima.forEach((elemento) => {
        if (elemento["Pronostico"].includes(climaSolicitado)) {
            total +=1;
    }
    })
    return total;
}
function maxValor(listaDias, nombreKey) {
    let max = 0 
    listaDias.forEach((elemento) => {
        if (elemento[nombreKey] >= max){
            max = elemento[nombreKey];
        }
    })
    return max;
}
function minValor(listaDias, nombreKey) {
    let min = 0 
    listaDias.forEach((elemento) => {
        if (elemento[nombreKey] <= min){
            min = elemento[nombreKey];
        }
    })
    return min;
}

for (let i = 0; i < ciudades.length; i++) {
    arregloFinal.push({
        ciudad: ciudades[i].nombreCiudad,
        tempAvg: ((totalTemp(ciudades[i].informacion.pronosticoSemanal,"tempMinima") + 
        totalTemp(ciudades[i].informacion.pronosticoSemanal,"tempMaxima")) / 7).toFixed(1),
        diasSoleados: totalDia(ciudades[i].informacion.pronosticoSemanal, "Soleado"),
        diasNublado: totalDia(ciudades[i].informacion.pronosticoSemanal, "Nublado"),
        diasLluviosos: totalDia(ciudades[i].informacion.pronosticoSemanal, "Lluvia"),
        diasChubascos: totalDia(ciudades[i].informacion.pronosticoSemanal, "Chubascos"),
        diasNieve: totalDia(ciudades[i].informacion.pronosticoSemanal, "Nieve"),
        diasTormenta: totalDia(ciudades[i].informacion.pronosticoSemanal, "Tormenta"),
        maxTemp: maxValor(ciudades[i].informacion.pronosticoSemanal, "tempMaxima"),
        minTemp: minValor(ciudades[i].informacion.pronosticoSemanal, "tempMinima")
    })
}

const displays = document.querySelectorAll(".displayResumen");

displays.forEach((elemento, index) => {
    elemento.classList.add("d-flex", "gap-3", "flex-column", "border", "text-center", "bg-light");
    const resumen = document.createElement("div");
    resumen.textContent = `Resumen meteorologico de ${arregloFinal[index].ciudad}`;
    elemento.appendChild(resumen);
    const temperaturaMax = document.createElement("div");
    temperaturaMax.textContent += ` Temperatura maxima: ${arregloFinal[index].maxTemp}°C`;
    elemento.appendChild(temperaturaMax);
    const temperaturaMin = document.createElement("div");
    temperaturaMin.textContent += ` Temperatura minima: ${arregloFinal[index].minTemp}°C`;
    elemento.appendChild(temperaturaMin);
    const descripcion = document.createElement("div");
    if ((arregloFinal[index].diasSoleados > arregloFinal[index].diasNublado && arregloFinal[index].diasSoleados > arregloFinal[index].diasLluviosos)){
        descripcion.textContent = "La semana es mayormente soleada";
    }
    else if ((arregloFinal[index].diasLluviosos > arregloFinal[index].diasSoleados || arregloFinal[index].diasChubascos > arregloFinal[index].diasSoleados)){
        descripcion.textContent = "La semana es mayormente lluviosa";
    }
    else if ((arregloFinal[index].diasNublado > arregloFinal[index].diasSoleados || arregloFinal[index].diasNublado > arregloFinal[index].diasLluviosos && arregloFinal[index].diasNublado > arregloFinal[index].diasChubascos)){
        descripcion.textContent = "La semana es mayormente nublada";
    }
    elemento.appendChild(descripcion);
})
