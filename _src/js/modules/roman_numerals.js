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

