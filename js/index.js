(function() {

    var scroll = function(target) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    };

    $("#buy_button").click(function() {
        scroll($("#pricing"));
    });

    $("#learn_more_button").click(function() {
        scroll($("#learn_more"));
    });

})();