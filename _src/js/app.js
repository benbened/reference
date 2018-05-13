var APP;
var module={};
APP={
    settings:{},
    modules:[],
    init:function(){
        APP.bindDomElements();
        APP.bindOnResize();

    },
    bindDomElements:function(){
        $('.js-action-loadfile')
            .on('click',function(){
                var file=$('#myFile')[0].files[0];
                if($('#myFile')[0].files.length==0){
                    $('.js-ui-outputFileValue').html('Keine Datei ausgewählt');
                }else {
                    OCR.readFromFile(file, function (data) {
                        $('.js-ui-outputFileValue').html(data.join('\r\n'));
                    });
                }
            });
        $('.js-action-convertRoman')
            .on('click',function(){
                var value=$('#myRoman').val();
                if(value!=0&&value!='') {
                    $('.js-ui-outputRoman').html(ROMANNUMERALS.convertVerifiedRomanToDecimal(value)||'Fehlerhafte Eingabe');
                }
            });
    },
    bindOnResize:function(){},
};
$( document ).ready(function() {
       APP.init();
});