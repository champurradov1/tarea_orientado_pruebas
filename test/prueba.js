
const assert = require('chai').assert;
const { helloText } = require('../logica');
const main = require('../logica');

//resultado
const elTextoAqui = helloText();

describe("Verificar si tenemos el texto correcto", function(){

    it("Validando..", function(){
        assert.equal(unTextoAqui, 'orientado a pruebas');
    });

});


// function red(){
//     var dni = "OU018K98J2111";
//     var cantidad = dni.length;

//     // console.log(cantidad)

//     if(cantidad == 13){
//         console.log('a');
//     } else {
//         console.log('b')
//     }
// }