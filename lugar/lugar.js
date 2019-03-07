const axios = require('axios');




const getLugarLatLng = async(dir) => {

    const encodeurl = encodeURI(dir);


    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodeurl,
        headers: { 'X-RapidAPI-Key': '8fd095478amshd5df32701ca7939p1ae01cjsnb47fc584b789' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        console.log('No hay resultados para la direccion ' + dir);
    }
    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;



    return {
        direccion,
        lat,
        long
    }
}


module.exports = {
    getLugarLatLng
}