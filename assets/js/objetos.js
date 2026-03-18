import {ApiCall} from './api.js';

export const santiago = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=-33.4569&longitude=-70.6483&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const nyc = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const losAngeles = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const londres = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const tokio = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const paris = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const singapur = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=1.3667&longitude=103.8&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const hk = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=22.2783&longitude=114.1747&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const shangai = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=31.2222&longitude=121.4581&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");
export const seul = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&daily=temperature_2m_min,weather_code,temperature_2m_mean,temperature_2m_max,wind_speed_10m_mean,relative_humidity_2m_mean,precipitation_probability_mean&current=temperature_2m,weather_code&timezone=auto");

export const arregloCiudades1 = [
    santiago,
    nyc,
    losAngeles,
    londres,
    tokio
]
export const arregloCiudades2 = [
    paris,
    singapur,
    hk,
    shangai,
    seul
]

export const iconos = {
    0: {
        nombre: "Cielo Despejado",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/clear-night.svg"
    },
    1: {
        nombre: "Cielo Despejado",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/clear-night.svg"
    },
    2: {
        nombre: "Cielo Parcialmente Cubierto",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night.svg"
    },
    3: {
        nombre: "Nublado",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/overcast-night.svg"
    },
    45: {
        nombre: "Niebla",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/fog-day.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/fog-night.svg"
    },
    48: {
        nombre: "Neblina",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/fog.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/fog.svg"
    },
    51: {
        nombre: "Precipitaciones",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg"
    },
    53: {
        nombre: "Precipitaciones Moderadas",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg"
    },
    55: {
        nombre: "Precipitaciones Intensas",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg"
    },
    56: {
        nombre: "Aguanieve",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-sleet.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-sleet.svg"
    },
    57: {
        nombre: "Aguanieve Densa",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-sleet.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-sleet.svg"
    },
    61: {
        nombre: "Lluvia Ligera",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg"
    },
    63: {
        nombre: "Lluvia Moderada",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-rain.svg"
    },
    65: {
        nombre: "Lluvia Intensa",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg"
    },
    66: {
        nombre: "Lluvia Congelante",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/sleet.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/sleet.svg"
    },
    67: {
        nombre: "Lluvia Congelante Intensa",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-sleet.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-sleet.svg"
    },
    71: {
        nombre: "Nevada",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-snow.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-snow.svg"
    },
    73: {
        nombre: "Nevada Moderada",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-snow.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-snow.svg"
    },
    75: {
        nombre: "Nevada Intensa",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg"
    },
    77: {
        nombre: "Granizo",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/hail.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/hail.svg"
    },
    80: {
        nombre: "Chubascos",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg"    
    },
    81: {
        nombre: "Chubascos Moderado",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg"
    },
    82: {
        nombre: "Chubascos Intenso",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg"
    },
    85: {
        nombre: "Chubascos de Nieve Moderado",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg"
    },
    86: {
        nombre: "Chubascos de Nieve Intenso",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg"
    },
    95: {
        nombre: "Tormenta Electrica",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms.svg"
    },
    96: {
        nombre: "Tormenta Electrica con Lluvia",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-day-rain.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-night-rain.svg"
    },
    99: {
        nombre: "Tormenta Electrica con Nevada",
        dia: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-day-snow.svg",
        noche: "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-night-snow.svg"
    }
}