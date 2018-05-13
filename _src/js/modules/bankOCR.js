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