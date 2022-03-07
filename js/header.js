'use strict';

jQuery(window).on('scroll', function() {
    if (800 < jQuery(this).scrollTop()) {
        jQuery(header).addClass('change_color');
    } else {
        jQuery(header).removeClass('change_color');
    }
});