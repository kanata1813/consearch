/*トップに戻る*/

jQuery(function() {
    var appear = false;
    var pagetop = $('#top');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                    'bottom': '50px'
                }, 400);
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom': '-200px'
                }, 400);
            }
        }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});