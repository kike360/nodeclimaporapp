const axios = require('axios');


const getclima = async(lat, long) => {

    const respuesta = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=40f7016c72a1488c2fcc4d9ba2223105&units=metric');
    if (respuesta.data.length === 0) {
        throw console.error('error al optener los datos');

    }
    return respuesta.data.main.temp;

}
module.exports = {
    getclima
}