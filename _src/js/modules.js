var OCR;

OCR={
    errmsg:{
        faultyLine:'Fehlerhafte Zeile',
        faultySymbol:'Fehlerhaftes Symbol'
    },
    recognizeSymbol:function(symbolstring) {
        switch(symbolstring){
            case '     I  I':
                return '1';
            case ' _  _II_ ':
                return '2';
            case ' _  _I _I':
                return '3';
            case '   I_I  I':
                return '4';
            case ' _ I_  _I':
                return '5';
            case ' _ I_ I_I':
                return '6';
            case ' _   I  I':
                return '7';
            case ' _ I_II_I':
                return '8';
            case ' _ I_I _I':
                return '9';
            case ' _ I II_I':
                return '0';
            default:
                return OCR.errmsg.faultySymbol;
        }
    },

    cutSymbolFromLines:function (lines) {
        let
            symbolcount=lines[0].length/4,
            symbolstrings=[]
        ;
            for(let ii=0;ii<symbolcount;ii++){

            symbolstrings[ii]=OCR.recognizeSymbol(
                [
                    lines[0].substr(ii*4,3),
                    lines[1].substr(ii*4,3),
                    lines[2].substr(ii*4,3)
                ].join('')
            );
        }
        return symbolstrings.join('');
    },
    getFile:function(path, callback){
        var file='';
        if(typeof(window)=='undefined'){
            let fs = require('fs'), file;
            fs.readFile(path, 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                }
                callback(data.split(/[\n\r]+/g));
            });
        }else{
            var reader = new FileReader();
            reader.onload = function(event) {
                console.log(event);
                var data = event.target.result;
                callback(data.split(/[\n\r]+/g));
            };

            reader.onerror = function(event) {
                console.error("File could not be read! Code " + event.target.error.code);
            };

            reader.readAsText(path);
        }
    },

    parseLines:function (lines) {
        let linecount=lines.length,
            result=[]
        ;
        for(let ii=0;ii < linecount;ii+=4){
            result[ii/4]=OCR.verifyLines([
                lines[ii]||'',
                lines[ii+1]||'',
                lines[ii+2]||''
            ]);
        }
        return result;

    },
    verifyLines:function(lines){
        var errmsg= OCR.errmsg.faultyLine;
        lines.forEach(function(ele,index){
            if((ele.length-3)%4==3){
                lines[index]=lines[index]+' ';
            }
            if(!ele.match(/^[ _I]+$/g)){
                lines= errmsg;
                return;
            }
        });
        if(lines==errmsg){
            return lines;
        }
        lines=OCR.cutSymbolFromLines(lines);
        if(lines.includes(OCR.errmsg.faultySymbol)){
            lines=errmsg;
        }
        return lines;

    },
    readFromFile:function(path,callback){
        OCR.getFile(path,function(data){
            callback( OCR.parseLines(data));
        });
    }
};

module.exports = OCR;

/*
     _   _       _   _   _   _   _   _
  I  _I  _I I_I I_  I_    I I_I I_I I I
  I I_   _I   I  _I I_I   I I_I  _I I_I
*/
var ROMANNUMERALS;
// rules:
// notation in shortest possible way eg: XVI not IXIVIII or VVVI
// old-roman-rule: up to 4 digits possible IIII or CCCC - not used since max occurrence is defined as MMM
// subtractive-rule: IV instead of IIII
// Usage of Latin Chars as digits
ROMANNUMERALS={
    romandigits: {
        I: 1, V: 5, X: 10,
        X: 10, L: 50, C: 100,
        C: 100, D: 500, M: 1000
    }
    ,
    convertRomanToDecimal:function(romNum){
        romNum=romNum.toUpperCase();
        var
            digits=ROMANNUMERALS.romandigits,
            decimalValue=0,
            romDigL=romNum.length
        ;
        if( romDigL > 1) {
                var ii = 0;
                for( ii = 0; ii < romDigL-1; ii++) {
                var
                    digit = digits[romNum.substr(ii,1)],
                    digitToRight = digits[romNum.substr(ii+1,1)]
                ;
                if (digit < digitToRight) {
                    decimalValue += digitToRight - digit;
                    ii++;
                } else {
                    decimalValue += digit;
                }
            }
            if(ii!=romDigL){
                decimalValue+= digits[romNum.substr(romDigL-1,1)];
            }
        }else{
            decimalValue+= digits[romNum];
        }

        return decimalValue+'';
    },

    convertVerifiedRomanToDecimal:function(romNum){
        if(romNum.match(/[^ivxlcdm]+/gi)){
            return false;
        }
        if(romNum.match(/ivi|ixi|xlx|xcx|cdc|cmc|il|ic|id|im|vx|vc|vd|vm|xd|xm|lc|ld|lm|dm|vv|ll|dd|mmmm|cccc|xxxx|iiii/gi)){
            return false;
        }
        return ROMANNUMERALS.convertRomanToDecimal(romNum);

    }
};

module.exports = ROMANNUMERALS;

