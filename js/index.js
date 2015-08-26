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

    $(".baseline-text").typed({
        strings: ["Learn the basics^200 of the 3D framework Babylon.js^200 by creating a whole game. ^1000<br>This 160 pages e-book^300 will teach you^200 everything you need to know about Babylon.js^200 to get the most out of it!"],
        showCursor: true,
        contentType: 'html',
        startDelay: 1000,
        typeSpeed: 30
    });

})();