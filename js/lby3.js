!function (window, document, $, undefined) {
    var $guo = $('.guo');       
    var url = 'http://localhost/api/gome_list.php?callback=?';

    $.get(url, function(response) {
        var $dgfBorder = $('.dgf-border'),
            dfb = [];
        if(!response) {
            return;
        };
        $.each(response.data, function(index, obj) {
            // console.log(obj)
            if(obj.img) {
                var src = ('http://localhost/api/userPng/' + obj.img);
            }

            dfb.push(
                '<li class="dfg">',
                    '<img class="guo" src="',src,'" alt="">',
                    '<div class="dfg-right">',
                        '<div class="luyin">',obj.title,'</div>',
                        '<div class="hyg">',
                            obj.price.toFixed(2),
                            '<img src="img/2236.png" alt="">',
                        '</div>',
                        '<div class="pl">',obj.sales,'</div>',
                        '<div class="youhui">',
                            '<span class="yh">满1000减50</span>',
                            '<span class="bs">包税</span>',
                        '</div>',
                    '</div>',
                    '<span class="ddd"></span>',
                '</li>'
            );  
            
        });
        $dgfBorder.html(dfb.join(''));
    }, 'json');
}(window, document, jQuery);