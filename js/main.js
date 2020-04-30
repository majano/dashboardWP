const majano = {
    aside : function() {
        
        $('.aside .nav li').on('click', function() {
            $('.aside .nav li').removeClass('active');
            $(this).addClass('active');
        });
    },

    topbar : function() {

        $('.top_bar_user .user').on('click', function() {
            $('.user_menu').slideToggle();
        });
    },

    layout : function() {

        this.aside();
        this.topbar();
    }
}

$(document).ready(function() {
    
    majano.layout();
});