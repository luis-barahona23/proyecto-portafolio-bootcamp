class ApiCall {
    constructor(url) {
        this.fetchUrl = url;
    }

    async fetchCall() {
        const url = this.fetchUrl;
        try {
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado);
        }
        catch(error) {
            console.log("Error detectado: ", error.name, error.message)
        }
    }
}

const santiago = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=-33.4569&longitude=-70.6483&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const londres = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const nyc = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const losAngeles = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const tokio = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const paris = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const singapur = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=1.3667&longitude=103.8&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const hk = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=22.2783&longitude=114.1747&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const shangai = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=31.2222&longitude=121.4581&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
const seul = new ApiCall("https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&timezone=auto");
setTimeout(()=>{ //hacer el llamado fetch individualmente generaba el error 429 (demasiadas conexiones concurrentes), asi que fue necesario separar las fetch en lotes para evitarlo
    santiago.fetchCall();
    nyc.fetchCall();
    losAngeles.fetchCall();
    londres.fetchCall();
    tokio.fetchCall();
},1000)
setTimeout(()=> {
    paris.fetchCall();
    singapur.fetchCall();
    hk.fetchCall();
    shangai.fetchCall();
    seul.fetchCall();
}, 1500);

