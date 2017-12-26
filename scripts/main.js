// avoiding navigation bar coverage when anchor locating
// function locateAt(x) {
//     x = document.getElementById(e);
//     var y = x.offsetTop;
//     while (x=x.offsetParent) {
//         y += x.offsetTop;
//     }
//     y -= 70;
//     window.scrollTo(0,y);
// }

// scroll smoothly when anchor locating
var $root = $('html, body');
// excluding carousel arrows
$('a[href^="#"]:not(a[href="#my-slider"])').click(function () {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

// for mobile device: show/hide web content when menu hamburger clicked
function showHide(checked) {
    if (checked == true) {
        $("#to-be-hidden").fadeOut();
    }
    else {
        $("#to-be-hidden").fadeIn();
    }
}

