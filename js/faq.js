$(".faq__con dd").hide();
$(".faq__con dl").on("click", function(e) {
    $('dd', this).slideToggle('fast');
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    } else {
        $(this).addClass('open');
    }
});