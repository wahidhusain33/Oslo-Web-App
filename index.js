$(function () {

    var current = 1;

    $slider = $('#slider');
    $container = $slider.find('.slides');
    $slides = $container.find('.slide');

    setInterval(function () {
        $container.animate({ 'margin-left': '-=750px' }, 1000, function () {
            current++;
            if(current === $slides.length){
                current = 1;
                $container.css('margin-left',0);
            }
        });
    }, 2500);


});