$(document).ready(function() {
    $('.About').click(function () { 
        $('.main_bg').css('background-image','none');
        $('.main_bg').css('background-color','#f17c72');
        $('.home_content').css('display','none');

        $('.About').css('background-color','#e6655e');
        $('.Services').css('background-color','transparent');
        $('.Clients').css('background-color','transparent');
        $('.Contacts').css('background-color','transparent');
    });

    $('.Services').click(function () {
        $('.main_bg').css('background-image','none');
        $('.main_bg').css('background-color','#32ac97');
        $('.home_content').css('display','none');

        $('.About').css('background-color','transparent');
        $('.Services').css('background-color','#46dcc7');
        $('.Clients').css('background-color','transparent');
        $('.Contacts').css('background-color','transparent');
    });

    $('.Clients').click(function () {
        $('.main_bg').css('background-image','none');
        $('.main_bg').css('background-color','#7f4c76');
        $('.home_content').css('display','none');

        $('.About').css('background-color','transparent');
        $('.Services').css('background-color','transparent');
        $('.Clients').css('background-color','#c7a1c2');
        $('.Contacts').css('background-color','transparent');

    });

    $('.Contacts').click(function () {
        $('.main_bg').css('background-image','none');
        $('.main_bg').css('background-color','#3f9fc9');
        $('.home_content').css('display','none');

        $('.About').css('background-color','transparent');
        $('.Services').css('background-color','transparent');
        $('.Clients').css('background-color','transparent');
        $('.Contacts').css('background-color','#334960');

    });

    $('.Home').click(function () {
        $('.main_bg').css('background-image','url("img/backgroung.png")');
        $('.home_content').css('display','block');

        $('.Home').css('background-color','#3f9fc9');
        $('.About').css('background-color','transparent');
        $('.Services').css('background-color','transparent');
        $('.Clients').css('background-color','transparent');
        $('.Contacts').css('background-color','transparent');
    });
})

