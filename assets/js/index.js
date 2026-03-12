import {santiago, londres, nyc, losAngeles, hk, seul, shangai, paris, tokio, singapur} from './objetos.js';
function retrasar(ms){
    return new Promise(resolver => setTimeout(resolver, ms));       
}
function separarNombre(nombre) {
    let nombreASeparar = nombre.timezone.split('/');
    nombreASeparar = nombreASeparar[1].split('_');
    return nombreASeparar.join(' ')
    

}
async function main() {
    await Promise.all([
        santiago.fetchCall(),
        nyc.fetchCall(),
        losAngeles.fetchCall(),
        londres.fetchCall(),
        hk.fetchCall(),
    ])
    
    await retrasar(1000);
    await Promise.all([
        seul.fetchCall(),
        shangai.fetchCall(),
        paris.fetchCall(),
        tokio.fetchCall(),
        singapur.fetchCall()])

    console.log(santiago.resultado)
}

main()