
'use strict';
var expect = require('chai').expect;
describe('BankOCR', function() {
    it(' File should exist', function() {
       var  OCR = require('../js/modules/bankOCR.js');
        expect(OCR).to.not.be.undefined;
    });
});


describe('#recognizeSymbol()',function(){
    it('get correct symbols from simplified matrix',function() {
        var OCR = require('../js/modules/bankOCR.js');
        var input = '     I  I';
        var expected = '1';
        var actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = ' _  _II_ ';
        expected = '2';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = ' _  _I _I';
        expected = '3';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = '   I_I  I';
        expected = '4';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = ' _ I_  _I';
        expected = '5';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = ' _ I_ I_I';
        expected = '6';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = ' _   I  I';
        expected = '7';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = ' _ I_II_I';
        expected = '8';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = ' _ I_I _I';
        expected = '9';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
        input = ' _ I II_I';
        expected = '0';
        actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
    });
    it('get correct response for unknown Symbols from simplified matrix',function() {
        var OCR = require('../js/modules/bankOCR.js');
        var input = '   + I  I';
        var expected = OCR.errmsg.faultySymbol;
        var actual = OCR.recognizeSymbol(input);
        expect(actual).to.equal(expected);
    });
});
describe('#cutSymbol()',function(){
    it('cut symbol from line',function() {
        var OCR = require('../js/modules/bankOCR.js');
        var input = [
            '     _   _       _   _   _   _   _   _ ',
            '  I  _I  _I I_I I_  I_    I I_I I_I I I',
            '  I I_   _I   I  _I I_I   I I_I  _I I_I'
        ];
        var expected = '1234567890';
        var actual = OCR.cutSymbolFromLines(input);
        expect(actual).to.eql(expected);
        input = [
            '     _   _   _   _   _   _   _ ',
            '  I  _I  _I I_    I I_I I_I I I',
            '  I I_   _I  _I   I I_I  _I I_I'
        ];
        expected = '12357890';
        actual = OCR.cutSymbolFromLines(input);
        expect(actual).to.eql(expected);

        })
});

describe('#getFile()',function(){
    it('get fully valid file',function(done) {
        var OCR = require('../js/modules/bankOCR.js');
        var path='_src/tests/data/testfile1.txt';
        OCR.getFile(path,function(data){
            var expected = [
                "     _   _       _   _   _   _   _   _ ",
                "  I  _I  _I I_I I_  I_    I I_I I_I I I",
                "  I I_   _I   I  _I I_I   I I_I  _I I_I",
                "                                       ",
                "     _   _       _   _   _   _   _   _ ",
                "  I  _I  _I I_I I_  I_    I I_I I_I I I",
                "  I I_   _I   I  _I I_I   I I_I  _I I_I",
                "                                       "
            ];
            expect(data).to.eql(expected);
            done();
        });
    });
    it('get pretty valid file',function(done) {
        var OCR = require('../js/modules/bankOCR.js');
        var path='_src/tests/data/testfile2.txt';
        OCR.getFile(path,function(data){
            var expected = [
                "     _   _       _   _   _   _   _   _",
                "  I  _I  _I I_I I_  I_    I I_I I_I I I",
                "  I I_   _I   I  _I I_I   I I_I  _I I_I",
                " ",
                "     _   _       _   _   _   _   _   _",
                "  I  _I  _I I_I I_  I_    I I_I I_I I I",
                "  I I_   _I   I  _I I_I   I I_I  _I I_I",
                ""
            ];
            expect(data).to.eql(expected);
            done();
        });
    });
    it('get faulty file',function(done) {
        var OCR = require('../js/modules/bankOCR.js');
        var path='_src/tests/data/testfile_faulty.txt';
        OCR.getFile(path,function(data){
            var expected = [
                "     _   _       _   _   _   _   _   _ ",
                "  I  _I  _I I_I I_  I_    I I_I I_I I I",
                "  I I_   _I   I  _I I_I   I I_I  _I I_I",
                "     _   _       _   _   _   _   _   _ ",
                "  I  _I  _I I_I I_  I_ +  I I_I I_I I I",
                "  I I_   _I   I  _I I_I   I I_I  _I I_I",
                "     _   _       _   _   _   _   _   _ ",
                "  I  _I  _I I_I I_  I_    I I_I I_I I I",
                "  I I_   _I   I  _| I_Io  I I_I  _I I_I",
                "     _   _       _   _   _   _   _   _ ",
                "  I  _I  _I I_I I_  I_    I I_I I_I I I",
                "  I I_   _I   I  _n I_I   I I_I  _I I_I",
                "     _   _       _   _   _   _   _   _",
                "  I  _I  _I I_I I_  I_    I I_I I_I I I",
                "  I I_   _I   I  _I I_I   I I_I  _I I_I",
                "     _   _       _   _   _   _   _   _ ",
                "  I  _I  _I I_I I_  I_    I I_I I_I I  ",
                "  I I_   _I   I  _I I_I   I I_I  _I I_I"

            ];
            expect(data).to.eql(expected);
            done();
        });
    });
});
describe('#readFromFile()',function(){
    it('read valid file',function(done) {
        var OCR = require('../js/modules/bankOCR.js');
        var path='_src/tests/data/testfile1.txt';
        OCR.readFromFile(path,function(data){
            var expected = [
                "1234567890",
                "1234567890"
            ];
            expect(data).to.eql(expected);
            done();
        });
    });
    it('read mostly valid file',function(done) {
        var OCR = require('../js/modules/bankOCR.js');
        var path='_src/tests/data/testfile2.txt';
        OCR.readFromFile(path,function(data){
            var expected = [
                "1234567890",
                "1234567890"
            ];
            expect(data).to.eql(expected);
            done();
        });
    });
    it('read faulty file',function(done) {
        var OCR = require('../js/modules/bankOCR.js');
        var path='_src/tests/data/testfile_faulty.txt';
        OCR.readFromFile(path,function(data){
            var errmsg=OCR.errmsg.faultyLine;
            var expected = [
                "1234567890",
                errmsg,
                errmsg,
                "1234567890",
                errmsg
            ];
            expect(data).to.eql(expected);
            done();
        });
    });

});
describe('#verifyLines()',function(){
    it('testing valid lines',function() {
        var OCR = require('../js/modules/bankOCR.js');
        var input = [
            '     _   _       _   _   _   _   _   _ ',
            '  I  _I  _I I_I I_  I_    I I_I I_I I I',
            '  I I_   _I   I  _I I_I   I I_I  _I I_I'
        ];
        var expected = '1234567890';
        var actual = OCR.verifyLines(input);
        expect(actual).to.eql(expected);

    });
    it('testing pretty valid lines',function() {
        var OCR = require('../js/modules/bankOCR.js');
        var input = [
            '     _   _       _   _   _   _   _   _',
            '  I  _I  _I I_I I_  I_    I I_I I_I I I',
            '  I I_   _I   I  _I I_I   I I_I  _I I_I'
        ];
        var expected = '1234567890';
        var actual = OCR.verifyLines(input);
        expect(actual).to.eql(expected);

    })
    it('testing invalid line',function() {
        var OCR = require('../js/modules/bankOCR.js');
        var input = [
            '     _   _       _   _   _   _   _   _ ',
            '  I  _I  _I I_d I_  I_ +  I I_I I_I I I',
            '  I I_   _I   I  _I I_I   I I_I  _I I_I'
        ];
        var expected = OCR.errmsg.faultyLine;
        var actual = OCR.verifyLines(input);
        expect(actual).to.eql(expected);
        input = [
            '     _   _       _   _   _   _   _   _ ',
            '  I  _I  _I I_I I_  I_ +  I I_I I_I I I',
            '  I I_   _I   I  _I I_I   I I_I  _I I_I'
        ];
        expected = OCR.errmsg.faultyLine;
        actual = OCR.verifyLines(input);
        expect(actual).to.eql(expected);

    })
});
//TODO:Frontend for fileupload
//TODO:SanitizeLines