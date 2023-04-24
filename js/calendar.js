var html_prev = '<li class="month-day"><div class="week">sábado</div><div class="day-month">XX set</div></li><li class="month-day"><div class="week">domingo</div><div class="day-month">XX set</div></li><li class="month-day"><div class="week">segunda</div><div class="day-month">XX set</div></li><li class="month-day"><div class="week">terça</div><div class="day-month">XX set</div></li><li class="month-day"><div class="week">quarta</div><div class="day-month">XX set</div></li><li class="month-day"><div class="week">quinta</div><div class="day-month">XX set</div></li><li class="month-day"><div class="week">sexta</div><div class="day-month">XX set</div></li>';

var html_next = '<li class="month-day"><div class="week">sábado</div><div class="day-month">YY set</div></li><li class="month-day"><div class="week">domingo</div><div class="day-month">YY set</div></li><li class="month-day"><div class="week">segunda</div><div class="day-month">YY set</div></li><li class="month-day"><div class="week">terça</div><div class="day-month">YY set</div></li><li class="month-day"><div class="week">quarta</div><div class="day-month">YY set</div></li><li class="month-day"><div class="week">quinta</div><div class="day-month">YY set</div></li><li class="month-day"><div class="week">sexta</div><div class="day-month">YY set</div></li>';

$('.jcarousel')
    .on('jcarousel:createend', function () {
        $(this).jcarousel('scroll', $('.jcarousel li:eq(' + get_initialSlide($('.jcarousel').find("ul")) + ')'), false);
    }).jcarousel();

$('.jcarousel-prev').on('jcarouselcontrol:active', function () {
    $(this).removeClass('inactive');
}).on('jcarouselcontrol:inactive', function () {
    $(this).addClass('inactive');
}).jcarouselControl({
    target: '-=7'
});


$('.jcarousel-next').on('jcarouselcontrol:active', function () {
    $(this).removeClass('inactive');
}).on('jcarouselcontrol:inactive', function () {
    $(this).addClass('inactive');
}).jcarouselControl({
    target: '+=7'
});

function get_initialSlide(el) {
    var initialSlide = $(".month-day").index(el.find('.month-day.active'))
    return parseInt(initialSlide);
}

$('.add-prev').click(function () {
    $('.jcarousel ul').prepend(html_prev);
    $('.jcarousel').jcarousel('reload');
});

$('.add-next').click(function () {
    $('.jcarousel ul').append(html_prev);
    $('.jcarousel').jcarousel('reload');
});