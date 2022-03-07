/*ハンバーガーメニューを閉じるjQuery*/
$(function() {
    $('.header__hummenu__list__menu__link').on('click', function(event) {
        $('#header__hummenu__back__input').prop('checked', false);
    });
});