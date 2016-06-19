// function xianshi() {
//     var Mybtn = document.getElementById('Mybtn'),
//         Mydiv = document.getElementById('Mydiv');

//         Mybtn.onclick = function() {
//             if (Mybtn.innerHTML == '显示') {
//                 Mybtn.innerHTML = '隐藏';
//                 Mydiv.style.display = 'block';
//             } else {
//                 Mybtn.innerHTML = '显示';
//                 Mydiv.style.display = 'none';
//             }
//         };
// };

// xianshi();

/*-------------------------------显示隐藏jQuery-----------------------------------------------*/

function xs() {
    var $mybtn = $('.mybtn'),
        $mydiv = $('.mydiv');


    $mybtn.on('click', function() {
        $mydiv.toggleClass('on');
        if ($mydiv.hasClass('on')) {
            $mybtn.html('隐藏');
        } else {
            $mybtn.html('显示');
        }
    });
}

xs();

/*-----------------------------------手风琴菜单-----------------------------------------------*/

function sfq() {
    var $border = $('.border');

        $border.on('click', function() {
            var $this = $(this);
                $this
                    .find('ul')
                    .slideToggle()
                    .end()
                    .siblings()
                    .find('ul')
                    .slideUp()
        })
};

sfq();

/*========================================图片轮播===============================================*/

function tplb() {
    var $tplb = $('.tplb'),
        $p = $tplb.find('p'),
        $uls = $tplb.find('ul'),
        width = $uls.find('li').width(),
        len = $uls.find('li').length,
        ulwidth = width * len,
        $lis = $('ol').find($('ol > li'));
        
    function tianjia() {
        var i, arr = [];
        for (i=0; i<len; i++) {
            if (arr == 0) {
                arr.push('<li class="ind">'+'</li>')
            } else {
                arr.push('<li>', '</li>')
            }
        } 
        return arr.join('');    
    }
    $('ol').html(tianjia());


    $('ol').find('li').on('click', function() {
        var $this = $(this),
            index = $this.index();
        $uls.animate({marginLeft: -width * index}, 300, function() {
            $this.addClass('ind').siblings('.ind').removeClass('ind');
        })
    })

    $p.on('click', function() {
        var $this = $(this),
            inde = $('.ind').index();    

        if ($this.hasClass('two')) {
            inde++;
            inde == len ? inde = 0 : inde;
            tri();
        } else  {
            inde--;
            tri();
        }


        function tri() {
            $('ol').find('li').eq(inde).trigger('click');
        };
    });
};

tplb();

/*-------------------------------------滑动停靠菜单-------------------------------------------*/

function hdtk() {
    var $bdr = $('.bdr'),
        $lef = $('.lef'),
        $qq = $('.qq');
    $lef.on('click', function() {
        if ($bdr.hasClass('rt0')) {
            $bdr.animate({right: -160}, 500).removeClass('rt0');
        } else {
            $bdr.animate({right: -10}, 500).addClass('rt0');
        }

        $qq.toggleClass('qqr');
    });
};

hdtk();

/*-------------------------------------hide()方法--------------------------------------------*/

function onclickHide() {
    var $onHide = $('.onHide'),
        $redSquare = $('.redSquare');
    $onHide.on('click', function() {
        $redSquare.hide(2000)
    })
}
onclickHide();