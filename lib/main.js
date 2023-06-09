$(document).ready(function(){
    $("#tel").mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('form').validate({
        rules:{
            email:{
                required:true,
                email: true
            }
        }
    })
});