$(document).ready(function() {
    $('.Home').click(function () {
        $('.main_bg').css('background-image','url("img/background.png")');
        $('.home_content').css('display','block');
        $('.about_content').css('display','none');
        $('.service_content').css('display','none');
        $('.clients_content').css('display','none');
        $('.contacts_content').css('display','none');

        $('.Home').css('background-color','#3f9fc9');
        $('.About').css('background-color','transparent');
        $('.Services').css('background-color','transparent');
        $('.Clients').css('background-color','transparent');
        $('.Contacts').css('background-color','transparent');
    });
    
    $('.About').click(function () { 
        $('.main_bg').css('background-image','none');
        $('.main_bg').css('background-color','#f17c72');
        $('.home_content').css('display','none');
        $('.about_content').css('display','block');
        $('.service_content').css('display','none');
        $('.clients_content').css('display','none');
        $('.contacts_content').css('display','none');

        $('.Home').css('background-color','transparent');
        $('.About').css('background-color','#e6655e');
        $('.Services').css('background-color','transparent');
        $('.Clients').css('background-color','transparent');
        $('.Contacts').css('background-color','transparent');
    });

    $('.Services').click(function () {
        $('.main_bg').css('background-image','none');
        $('.main_bg').css('background-color','#32ac97');
        $('.home_content').css('display','none');
        $('.about_content').css('display','none');
        $('.service_content').css('display','block');
        $('.clients_content').css('display','none');
        $('.contacts_content').css('display','none');

        $('.Home').css('background-color','transparent');
        $('.About').css('background-color','transparent');
        $('.Services').css('background-color','#46dcc7');
        $('.Clients').css('background-color','transparent');
        $('.Contacts').css('background-color','transparent');
    });

    $('.Clients').click(function () {
        $('.main_bg').css('background-image','none');
        $('.main_bg').css('background-color','#7f4c76');
        $('.home_content').css('display','none');
        $('.about_content').css('display','none');
        $('.service_content').css('display','none');
        $('.clients_content').css('display','block');
        $('.contacts_content').css('display','none');

        $('.Home').css('background-color','transparent');
        $('.About').css('background-color','transparent');
        $('.Services').css('background-color','transparent');
        $('.Clients').css('background-color','#c7a1c2');
        $('.Contacts').css('background-color','transparent');

    });

    $('.Contacts').click(function () {
        $('.main_bg').css('background-image','none');
        $('.main_bg').css('background-color','#3f9fc9');
        $('.home_content').css('display','none');
        $('.about_content').css('display','none');
        $('.service_content').css('display','none');
        $('.clients_content').css('display','none');
        $('.contacts_content').css('display','block');

        $('.Home').css('background-color','transparent');
        $('.About').css('background-color','transparent');
        $('.Services').css('background-color','transparent');
        $('.Clients').css('background-color','transparent');
        $('.Contacts').css('background-color','#334960');

    });

    $('.home_content').addClass('animated bounceInLeft');
    $('.team_item').addClass('animated bounceInLeft');
    $('.about_up').addClass('animated bounceInRight');
    $('.service_content').addClass('animated zoomIn');
    $('.clients_content').addClass('animated fadeIn');
    $('.contacts_content').addClass('animated pulse');

})

