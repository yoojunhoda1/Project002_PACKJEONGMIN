$(document).ready(function () {

    // 실행문

    // background-image 영화스틸컷 

    // 동주
    $('.phototicket ul').eq(0).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/dongju.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })

    // 다만악
    $('.phototicket ul').eq(1).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/damanac.jpeg)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })


    // 파수꾼
    $('.phototicket ul').eq(2).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/black2x.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })

    // 지옥
    $('.phototicket ul').eq(3).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/hell.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })

    // 들개
    $('.phototicket ul').eq(4).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/wilddog.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })

    // 타짜
    $('.phototicket ul').eq(5).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/poker3_1.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })

    // 그것만이 내 세상
    $('.phototicket ul').eq(6).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/my_world.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })

    //기적
    $('.phototicket ul').eq(7).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/miracle.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })

    //시동
    $('.phototicket ul').eq(8).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/letsgo.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })

    // 변산

    $('.phototicket ul').eq(9).mousemove(function () {

        $('.filmo').css({
            'background-image': 'url(img/sunset.png)',
            'opacity': '1',
            'transition': 'all 1s '
        })

    })


    // draggable slider -> left -350px만큼 이동  


    // 포토티켓 변수 
    let phototickets = $('.phototicket')
    let phototicket = $('.phototicket ul')



    // 함수 설정

    function leftMove(e) {
        phototickets.css({
            'left': posX
        })
    }

    function rightMove(e) {
        phototickets.css({
            'right': posX
        })
    }

    // photocard의 현재 위치 






    $(phototickets).draggable({
        axis: "x"
    });


    // 바코드 img 클릭시 필모 서브 페이지로 이동 

    // moneyGame

    



})