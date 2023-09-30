var chai = require("chai");
var assert = chai.assert;
var calculator = require('../calculator');


describe('pruebas unitarias: ', function(){
    describe('verificando funcion addTest',function(){
            it('verificar valor retornado: assert.equal(val, val): ', function(){
                resultl = calculator.addTest(1,1);
                assert.equal(resultl, 2);


            });
    });
});