$(document).ready (function() {
    $('.myMenu > li').bind('mouseover', openSubMenu);
    $('.myMenu > li').bind('mouseover', closeSubMenu);

    function openSubMenu() {
        $(this).find('ul').css('visibility', 'visible');
    };
    function closeSubMenu() {
        $(this).find('ul').css('visibility', 'hidden');
    };
}
);