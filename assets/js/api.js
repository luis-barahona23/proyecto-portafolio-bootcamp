export class ApiCall {
    constructor(url) {
        this.fetchUrl = url;
        this.resultado = null;
    }

    async fetchCall() {
        const url = this.fetchUrl;
        if (this.resultado !== null) {
            return this.resultado
        }
        try {
            const respuesta = await fetch(url);
            this.resultado = await respuesta.json();
            return this.resultado
        }
        catch(error) {
            console.log("Error detectado: ", error.name, error.message)
        }
    }
}


