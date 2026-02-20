import {ciudades} from "./detalleCiudades.js"
console.log(ciudades.length)
let arregloFinal = [];
function totalTemp(listaDias, nombreKey) //Funcion recibe el arreglo del pronostico semanal y la llave a reducir
{
    let valorTotal = listaDias.reduce((total, dia)=> {
        return total + dia[nombreKey]; //se llama el metodo reducir al arreglo donde se suman los valores de cada dia segun la llave pasada al segundo parametro
    }, 0);
    return valorTotal;
}
function totalDia(clima, climaSolicitado) //Funcion recibe el arreglo del pronostico semanal y la llave a contar el valor
{
    let total = 0; //variable inicializada en 0 que sera retornada con el valor total
    clima.forEach((elemento) => { //Se recorre el arreglo de pronostico semana
        if (elemento["Pronostico"].includes(climaSolicitado)) { //si el elemento (objeto) del arreglo cuenta con una llave que contiene la string pasada en el segundo parametro
            total +=1; // se agrega 1 al valor total
    }
    })
    return total; //retorna el valor de la variable total
}
function maxValor(listaDias, nombreKey)//Funcion recibe el arreglo del pronostico semanal y la llave a buscar
 {
    let max = 0 //inicializar variable que tendra el valor maximo pasado
    listaDias.forEach((elemento) => { //recorrer el arreglo del pronostico semanal
        if (elemento[nombreKey] >= max){ //en cada elemento del arreglo (objeto), se compara el valor de la propiedad solicitada con el segundo parametro de la funcion, si el valor es mayor a la variable "max"
            max = elemento[nombreKey]; //la variable "max" pasa a ser ese valor
        }
    })
    return max; //retorna el valor de "max"
}
function minValor(listaDias, nombreKey) //Funcion recibe el arreglo del pronostico semanal y la llave a buscar
{
    let min = Infinity //inicializar variable que tendra el valor minimo pasado, se inicializa en "Infinity" y no 0, debido a la posibilidad de que los valores pasados no sean menores a 0
    listaDias.forEach((elemento) => { //recorrer el arreglo del pronostico semanal
        if (elemento[nombreKey] <= min){ //condicional que verifica que el valor de cada propiedad con la llave pasada como segundo argumento de la funcion
            min = elemento[nombreKey]; //si la condicion se cumple, modificar la variable "min"
        }
    })
    return min; //retornar la variable "min"
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
