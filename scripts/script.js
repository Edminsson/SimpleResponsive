$(function() {
    $('#burgare').on('click', function(e){
        if($('.mini-menu').is(':visible') > 0) {
            $('.mini-menu').hide();
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        $('.mini-menu').show();
        //$('.mini-menu').toggleClass('mini-menu-show');
    });
    $(window).on('click',function(){
        $('.mini-menu').hide();
    })
})

