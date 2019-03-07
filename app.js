const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima/clima');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demant: true,
        desc: 'direccion de la ciudad para el clima'
    }
}).argv;


// clima.getclima(19.8583, -97.4267).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });



const getinfo = async(direcc) => {
    const resultados1 = await lugar.getLugarLatLng(direcc);
    if (resultados1.direccion.length === 0) {
        console.log('No hay resultados para la ciudad de ' + direcc);
    } else {
        clima.getclima(resultados1.lat, resultados1.long).then(r => {
            const kike = resultados1.direccion;
            const temperatura = r;
            console.log('El clima para  la ciudad de ' + kike + ' es de ' + temperatura + '°C');
        }).catch(err => {
            console.log(err);
        });
    }
}



getinfo(argv.direccion).then(res => {

    console.log(res);
}).catch(err => {
    console.log(err);

});

// lugar.getLugarLatLng(argv.direccion).then(res => {
//     console.log(res);
// }).catch(error => {
//     console.log(error);
// })