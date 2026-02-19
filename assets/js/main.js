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
console.log(arregloFinal);