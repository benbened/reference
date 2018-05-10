
'use strict';
var expect = require('chai').expect;
describe('RomanNumeralsConverter', function() {
    it(' File should exist', function() {
        var ROMANNUMERALS = require('../js/roman_numerals.js');
        expect(ROMANNUMERALS).to.not.be.undefined;
    });
});
describe('#convertRomanToDecimal()',function(){
    it('convert function should take roman value and convert to decimal value',function() {
        var ROMANNUMERALS = require('../js/roman_numerals.js');

        var input = 'I';
        var expected = '1';
        var actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'II';
        expected = '2';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'III';
        expected = '3';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'Iv';
        expected = '4';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'V';
        expected = '5';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'VI';
        expected = '6';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'VII';
        expected = '7';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'MMMDCCCLXXXVIII';
        expected = '3888';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'MMMCMXCIX';
        expected = '3999';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
        input = 'MMMCDXLIV';
        expected = '3444';
        actual = ROMANNUMERALS.convertRomanToDecimal(input);
        expect(actual).to.equal(expected);
    })
});
describe('#convertVerifiedRomanToDecimal()',function(){
    it('validate for correct digits',function() {
        var ROMANNUMERALS = require('../js/roman_numerals.js');

        var input = 'MMMCDXL IV';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'MMMCDX.LIV';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = '+MMCDXLIV';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = ' MMMCDXLIV';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = '-MMMCDXLIV';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'MMMGDXLIV';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
    })
});

describe('#convertVerifiedRomanToDecimal()',function(){
    it('validate for shortness',function() {
        var ROMANNUMERALS = require('../js/roman_numerals.js');
        var input = 'I';
        var expected = '1';
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'IVI';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'IVIi';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'IxIi';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'xLx';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'xCx';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'cDC';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'CMc';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
    })
});
describe('#convertVerifiedRomanToDecimal()',function(){
    it('validate for correct range',function() {
        var ROMANNUMERALS = require('../js/roman_numerals.js');

        var input = 'iL';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'iC';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'iD';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'iM';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'vX';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'Vc';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'vD';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'VM';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'XD';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'xM';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'LC';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'lD';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'lm';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
        var input = 'Dm';
        var expected = false;
        var actual = ROMANNUMERALS.convertVerifiedRomanToDecimal(input);
        expect(actual).to.equal(expected);
    })
});